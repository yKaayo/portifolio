import { useState, useRef } from "react";
import RoundedBorder from "../components/RoundedBorder";
import CarrerText from "../components/CarrerText";
import { gsap } from "gsap";

export default function Hero() {
  const [activeLink, setActiveLink] = useState("");
  const placeholderRef = useRef(null);

  const navLinks = [
    { name: "Home", link: "#home", key: "home" },
    { name: "Projetos", link: "#projects", key: "projects" },
  ];

  const animateScale = (element, scaleValue) => {
    gsap.fromTo(
      element,
      { scale: 1 },
      { scale: scaleValue, duration: 2, ease: "power1.out" }
    );
  };

  const wrapLetters = (text) => {
    if (!placeholderRef.current) return;
    placeholderRef.current.innerHTML = ""; // Limpa o conteúdo anterior
    [...text].forEach((letter) => {
      const span = document.createElement("span");
      span.style.filter = "blur(8px)";
      span.textContent = letter;
      placeholderRef.current.appendChild(span);
    });
  };

  const animBlurEffect = () => {
    if (!placeholderRef.current) return;
    const letters = placeholderRef.current.children;
    let index = 0;

    const clearNextLetter = () => {
      if (index < letters.length) {
        gsap.to(letters[index], { filter: "blur(0px)", duration: 0.5 });
        index++;

        if (index < letters.length) {
          setTimeout(clearNextLetter, 100);
        }
      }
    };

    setTimeout(clearNextLetter, 0);
  };

  const shuffleLetters = (finalText) => {
    if (!placeholderRef.current) return;

    // Limpa o conteúdo atual
    placeholderRef.current.innerHTML = "";

    // Preenche com espaços em branco
    wrapLetters(finalText.replace(/./g, " "));

    let textArr = finalText.split("");
    let shufflingCounter = 0;
    let intervalHandles = [];

    const shuffle = (i) => {
      if (shufflingCounter < 30) {
        textArr[i] = "ABCDEFGHIJKLMNOPQRSTUVWYZ"[
          Math.floor(Math.random() * 26)
        ];
        placeholderRef.current.children[i].textContent = textArr[i];
      } else {
        placeholderRef.current.children[i].textContent = finalText.charAt(i);
        clearInterval(intervalHandles[i]);
      }
    };

    for (let i = 0; i < finalText.length; i++) {
      intervalHandles[i] = setInterval(shuffle, 80, i);
    }

    setTimeout(() => {
      shufflingCounter = 30;

      for (let i = 0; i < finalText.length; i++) {
        placeholderRef.current.children[i].textContent = finalText.charAt(i);
        clearInterval(intervalHandles[i]);
      }

      animBlurEffect();
    }, 500);
  };

  const updatePlaceholderText = (e) => {
    const newText = e.target.textContent.toUpperCase();
    animateScale(placeholderRef.current, 1.25);
    shuffleLetters(newText);
  };

  const resetPlaceholderText = () => {
    const defaultText = "Eu sou Caio";
    shuffleLetters(defaultText);
  };

  return (
    <main className="flex justify-center items-center h-svh p-5 bg-background">
      <section className="hero">
        <div className="absolute top-0 z-[1] pb-2 px-3 rounded-md bg-background">
          <RoundedBorder className="-left-5 shadow-[10px_-10px_0_#1e2939]" />
          <RoundedBorder className="-right-5 shadow-[-10px_-10px_0_#1e2939]" />
          <ul className="px-5 py-3 w-fit rounded-md bg-black flex gap-5">
            {navLinks.map((link) => (
              <a
                onClick={() => setActiveLink(link.name)}
                href={link.link}
                key={link.key}
                className={`${
                  link.name === activeLink ? "active" : ""
                } nav__link`}
                onMouseOver={updatePlaceholderText}
                onMouseOut={resetPlaceholderText}
              >
                <li>{link.name}</li>
              </a>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <p className="px-3 py-1 text-white rounded-md border-2 border-white">
            Hello, World!
          </p>
          <h2
            id="placeholder"
            ref={placeholderRef}
            className="text-4xl md:text-6xl font-bold text-center text-white"
          >
            Eu sou Caio,
          <CarrerText />
          </h2>
        </div>

        <div className="absolute bottom-40 right-8 text-white">
          <p className="font-bold gradient--green text-xl text-end bg-clip-text text-transparent">
            + 1 ANO
          </p>
          <p>DE EXPERIÊNCIA</p>
        </div>

        <div className="flex items-center gap-3 absolute bottom-10 p-2 rounded-3xl border border-white">
          <div className="absolute left-0 bg-white/25 h-full w-full rounded-2xl"></div>

          <a
            className="relative px-5 py-2 rounded-2xl text-xl font-bold gradient--green duration-500 hover:scale-105"
            href="#projects"
          >
            Portifólio
          </a>

          <a
            className="relative mx-2 text-xl border-b-2 text-white border-transparent font-semibold duration-500 hover:border-primary-green"
            href="#contact"
          >
            Me contrate
          </a>
        </div>
      </section>
    </main>
  );
}
