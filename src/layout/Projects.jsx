import { useEffect, useRef, useState } from "react";
import githubApi from "../services/GithubApi";
import bannerFutureEnergy from "../assets/img/banner_future_energy.webp";
import advogadaCamilla from "../assets/img/advogada-camilla.webp";
import techseas from "../assets/img/techseas.webp";
import myTrip from "../assets/img/mytrip.webp";
import cicHome from "../assets/img/cichome.webp";
import previsaoDoTempo from "../assets/img/previsaodotempo.webp";
import myDrones from "../assets/img/mydrone.webp";
import cloudMe from "../assets/img/cloudme.webp";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [allProjects, setAllProjects] = useState([]);
  const [err, setErr] = useState(null);
  const workRef = useRef(null);
  const textContainerRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    async function callApi() {
      try {
        const data = await githubApi();
        console.log(data);
        setAllProjects(data);
      } catch {
        setErr("Erro ao carregar os projetos!");
      }
    }

    callApi();
  }, []);

  const projectsIndex = [
    {
      id: 0,
      img: advogadaCamilla,
      link: "https://camila-advogada.vercel.app",
      name: "Advocacia em Pauta",
    },
    {
      id: 9,
      img: bannerFutureEnergy,
      link: "https://green-energy-gs.vercel.app",
      name: "Future Energy",
    },
    {
      id: 10,
      img: cicHome,
      link: "https://ykaayo.github.io/HOME-CIC/",
      name: "CIC - Home",
    },
    {
      id: 8,
      img: techseas,
      link: "https://ykaayo.github.io/global-solution/",
      name: "TechSeas",
    },
    {
      id: 13,
      img: myTrip,
      link: "https://ykaayo.github.io/MyTrip/",
      name: "MyTrip",
    },
    {
      id: 12,
      img: myDrones,
      link: "https://ykaayo.github.io/MyDrones/",
      name: "MyDrones",
    },
    {
      id: 2,
      img: cloudMe,
      link: "https://ykaayo.github.io/CLOUDME/",
      name: "CloudMe",
    },
    {
      id: 15,
      img: previsaoDoTempo,
      link: "https://ykaayo.github.io/previsao-do-tempo/",
      name: "Previsão do Tempo",
    },
  ];

  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    const moveDistance = window.innerWidth * 5;
    let currentXPosition = 0;

    const lerp = (start, end, t) => start + (end - start) * t;

    const gridCanvas = document.createElement("canvas");

    gridCanvas.id = "grid-canvas";
    workRef.current.appendChild(gridCanvas);
    const gridCtx = gridCanvas.getContext("2d");

    const reziseGridCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      [gridCanvas.width, gridCanvas.height] = [
        window.innerWidth * dpr,
        window.innerHeight * dpr,
      ];
      [gridCanvas.style.width, gridCanvas.style.height] = [
        `${window.innerWidth}px`,
        `${window.innerHeight}px`,
      ];
      gridCtx.scale(dpr, dpr);
    };

    reziseGridCanvas();

    const drawGrid = (scrollProgress = 0) => {
      gridCtx.fillStyle = "black";
      gridCtx.fillRect(0, 0, gridCanvas.width, gridCanvas.height);
      gridCtx.fillStyle = "#00dd03";
      const [dotSize, spacing] = [1, 30];
      const [rows, cols] = [
        Math.ceil(gridCanvas.height / spacing),
        Math.ceil(gridCanvas.width / spacing) + 15,
      ];
      const offset = (scrollProgress * spacing * 10) % spacing;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          gridCtx.beginPath();
          gridCtx.arc(
            x * spacing - offset,
            y * spacing,
            dotSize,
            0,
            Math.PI * 2,
          );
          gridCtx.fill();
        }
      }
    };

    const letterScene = new THREE.Scene();
    const lettersCamera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    lettersCamera.position.z = 20;

    const lettersRenderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    lettersRenderer.setSize(window.innerWidth, window.innerHeight);
    lettersRenderer.setClearColor(0x000000, 0);
    lettersRenderer.setPixelRatio(window.devicePixelRatio);
    lettersRenderer.domElement.id = "letters-canvas";
    workRef.current.appendChild(lettersRenderer.domElement);

    const createTextAnimationPath = (yPos, amplitude) => {
      const points = [];
      for (let i = 0; i <= 20; i++) {
        const t = i / 20;
        points.push(
          new THREE.Vector3(
            -25 + 50 * t,
            yPos + Math.sin(t * Math.PI) * -amplitude,
            (1 - Math.pow(Math.abs(t - 0.5) * 2, 2)) * -5,
          ),
        );
      }

      const curve = new THREE.CatmullRomCurve3(points);
      const line = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(curve.getPoints(100)),
        new THREE.LineBasicMaterial({ color: 0x000, linewidth: 1 }),
      );
      line.curve = curve;
      return line;
    };

    const path = [
      createTextAnimationPath(10, 2),
      createTextAnimationPath(3.5, 1),
      createTextAnimationPath(-3.5, -1),
      createTextAnimationPath(-10, -2),
    ];
    path.forEach((line) => letterScene.add(line));

    const textContainer = textContainerRef.current;
    textContainer.innerHTML = "";

    const letterPositions = new Map();
    path.forEach((line, i) => {
      line.letterElements = Array.from({ length: 15 }, () => {
        const el = document.createElement("div");
        el.className = "letter";
        el.textContent = ["C", "A", "I", "O"][i];
        textContainer.appendChild(el);
        letterPositions.set(el, {
          current: { x: 0, y: 0 },
          target: { x: 0, y: 0 },
        });

        return el;
      });
    });

    const lineSpeedMultipliers = [0.9, 1, 0.8, 0.7];
    const updateTargetPositions = (scrollProgress = 0) => {
      path.forEach((line, lineIndex) => {
        line.letterElements.forEach((element, i) => {
          const totalLetras = line.letterElements.length;
          const espacoExtra = 0.05;

          const point = line.curve.getPoint(
            i / totalLetras +
              i * espacoExtra +
              ((scrollProgress * lineSpeedMultipliers[lineIndex]) % 1),
          );

          const vector = point.clone().project(lettersCamera);
          const positions = letterPositions.get(element);
          positions.target = {
            x: (-vector.x * 0.5 + 0.5) * window.innerWidth,
            y: (-vector.y * 0.5 + 0.5) * window.innerHeight,
          };
        });
      });
    };

    const updateLetterPositions = () => {
      letterPositions.forEach((positions, element) => {
        const distX = positions.target.x - positions.current.x;
        if (Math.abs(distX) > window.innerWidth * 0.7) {
          [positions.current.x, positions.current.y] = [
            positions.target.x,
            positions.target.y,
          ];
        } else {
          positions.current.x = lerp(
            positions.current.x,
            positions.target.x,
            0.07,
          );
          positions.current.y = lerp(
            positions.current.y,
            positions.target.y,
            0.07,
          );
        }

        element.style.transform = `translate(-50%, -50%) translate3d(${positions.current.x}px, ${positions.current.y}px, 0px)`;
      });
    };

    const updateCardsPosition = () => {
      const targetX =
        -moveDistance * (ScrollTrigger.getAll()[0]?.progress || 0);
      currentXPosition = lerp(currentXPosition, targetX, 0.07);
      gsap.set(cardsContainerRef.current, {
        x: currentXPosition,
      });
    };

    const animate = () => {
      updateLetterPositions();
      updateCardsPosition();
      lettersRenderer.render(letterScene, lettersCamera);
      requestAnimationFrame(animate);
    };

    const scrollTrigger = ScrollTrigger.create({
      trigger: "#work",
      start: "top top",
      end: "+=700%",
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        updateTargetPositions(self.progress);
        drawGrid(self.progress);
      },
    });

    drawGrid(0);
    animate();
    updateTargetPositions(0);

    const handleResize = () => {
      reziseGridCanvas();
      drawGrid(ScrollTrigger.getAll()[0]?.progress || 0);
      lettersCamera.aspect = window.innerWidth / window.innerHeight;
      lettersCamera.updateProjectionMatrix();
      lettersRenderer.setSize(window.innerWidth, window.innerHeight);
      updateTargetPositions(ScrollTrigger.getAll()[0]?.progress || 0);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      scrollTrigger.kill();
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  return (
    <>
      <div className="from-dark-blue h-10 bg-linear-to-b to-black"></div>

      <section
        ref={workRef}
        id="work"
        className="relative h-screen overflow-hidden bg-black"
      >
        <div
          ref={textContainerRef}
          className="pointer-events-none absolute top-0 left-0 z-[2] h-full w-full perspective-[2500px] perspective-origin-center"
        ></div>
        <ul
          ref={cardsContainerRef}
          className="relative z-10 flex h-[100vh] w-[500vw] items-center justify-around overflow-hidden ps-[100svw]"
        >
          {err && <p>{err}</p>}

          {projectsIndex.map((project) => {
            if (allProjects[project.id]) {
              return (
                <li
                  className="flex h-fit w-[10%] flex-col gap-2"
                  key={project.id}
                >
                  <a href={project.link} target="_blank" rel="noopener">
                    <img
                      src={project.img}
                      className="flex-1 overflow-hidden rounded-2xl border-4 border-black object-cover duration-300 hover:scale-110 hover:shadow-2xl"
                      alt=""
                    />
                  </a>
                </li>
              );
            }
          })}
        </ul>
      </section>
    </>
  );
}
