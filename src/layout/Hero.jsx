import { useRef } from "react";

// Components
import CarrerText from "../components/CarrerText";

// Layout
import Header from "./Header";

export default function Hero() {
  const placeholderRef = useRef(null);

  return (
    <main className="section h-screen">
      <section className="hero">
        <Header />

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
