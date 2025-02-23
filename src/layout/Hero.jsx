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
      { scale: scaleValue, duration: 2, ease: "power1.out" },
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
    <main className="bg-dark-blue flex h-svh items-center justify-center p-5">
      <section className="hero">
        <div className="bg-dark-blue absolute top-0 z-[1] rounded-md px-3 pb-2">
          <RoundedBorder className="-left-5 shadow-[10px_-10px_0_#1e2939]" />
          <RoundedBorder className="-right-5 shadow-[-10px_-10px_0_#1e2939]" />
          <ul className="flex w-fit gap-5 rounded-md bg-black px-5 py-3">
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
          <p className="rounded-md border-2 border-white px-3 py-1 text-white">
            Hello, World!
          </p>
          <h2
            id="placeholder"
            ref={placeholderRef}
            className="text-center text-4xl font-bold text-white md:text-6xl"
          >
            Eu sou Caio,
            <CarrerText />
          </h2>
        </div>

        <div className="absolute right-8 bottom-40 text-white">
          <p className="gradient--green bg-clip-text text-end text-xl font-bold text-transparent">
            + 1 ANO
          </p>
          <p>DE EXPERIÊNCIA</p>
        </div>

        <div className="absolute bottom-10 flex items-center gap-3 rounded-3xl border border-white p-2">
          <div className="absolute left-0 h-full w-full rounded-2xl bg-white/25"></div>

          <a
            className="gradient--green relative rounded-2xl px-5 py-2 text-xl font-bold duration-500 hover:scale-105"
            href="#projects"
          >
            Portifólio
          </a>

          <a
            className="hover:border-primary-green relative mx-2 border-b-2 border-transparent text-xl font-semibold text-white duration-500"
            href="#contact"
          >
            Me contrate
          </a>
        </div>
      </section>
    </main>
  );
}
