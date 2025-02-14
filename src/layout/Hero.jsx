import RoundedBorder from "../components/RoundedBorder";
import CarrerText from "../components/CarrerText";
import { useState } from "react";

export default function Hero() {
  const [activeLink, setActiveLink] = useState(false)
  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "Projetos", link: "#projects" },
  ];

  return (
    <main className="flex justify-center items-center h-svh p-5 bg-background">
      <section className="hero">
        <div className="absolute top-0 z-[1] pb-2 px-3 rounded-md bg-background">
          <RoundedBorder class="-left-5 shadow-[10px_-10px_0_#1e2939]" />
          <RoundedBorder class="-right-5 shadow-[-10px_-10px_0_#1e2939]" />
          <ul className="px-5 py-3 w-fit rounded-md bg-black flex gap-5">
            {navLinks.map((link) => (
              <a
              onClick={() => setActiveLink(link.name)}
                href={link.link}
                key={link.key}
                className={`${link.name === activeLink ? "active" : ""} nav__link`}
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

          <h2 className="text-4xl md:text-6xl font-bold text-center text-white">
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

        <div className="flex items-center gap-3 absolute bottom-10  p-2 rounded-3xl border border-white">
          <div className="absolute left-0 bg-white/25 h-full w-full rounded-2xl"></div>

          <a
            className="relative px-5 py-2 rounded-2xl text-xl font-bold gradient--green duration-500 hover:scale-105"
            href="#projects"
          >
            Portifólio
          </a>

          <a
            className="relative mx-2 text-xl border-b-2 text-white border-transparent font-semibold duration-500 hover:border-primary-green"
            href=""
          >
            Me contrate
          </a>
        </div>
      </section>
    </main>
  );
}
