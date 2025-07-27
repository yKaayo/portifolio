import { useRef } from "react";
import { Link } from "react-router";

// Components
import CarrerText from "../components/CarrerText";

// Icons
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import DarkVeil from "../components/DarkVeil";

export default function Hero() {
  const placeholderRef = useRef(null);

  const icons = [
    {
      icon: <FaLinkedin className="size-8 text-[#0A66C2]" />,
      link: "https://www.linkedin.com/in/caio-prates-dev/",
    },
    {
      icon: <FaGithub className="size-8 text-white" />,
      link: "https://github.com/yKaayo",
    },
    {
      icon: <BiLogoGmail className="size-8 text-red-600" />,
      link: "mailto:caiokaea@gmail.com?subject=Olá Caio, tenho interesse em seus serviços!",
    },
  ];

  return (
    <>
      <div className="fixed h-screen w-full">
        <DarkVeil />
      </div>

      <main className="section h-screen">
        <section className="hero">
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

          <div className="absolute bottom-40 left-8 z-[1] flex flex-col gap-5">
            {icons.map((icon) => (
              <a
                key={icon.icon}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon.icon}
              </a>
            ))}
          </div>

          <div className="absolute bottom-10 flex items-center gap-3 overflow-hidden rounded-3xl border border-white p-2">
            <div className="absolute left-0 h-full w-full bg-white/30 backdrop-blur-xl"></div>

            <Link
              className="gradient--green relative rounded-2xl px-5 py-2 text-xl font-bold duration-500 hover:scale-105"
              to="/projetos"
            >
              Projetos
            </Link>

            <a
              href="https://wa.me/5535991049862?text=Olá%20Caio,%20tenho%20interesse%20em%20seus%20serviços!"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Mandar mensagem pelo Whatsapp"
              className="hover:border-primary-green relative mx-2 cursor-pointer border-b-2 border-transparent text-xl font-semibold text-white duration-500"
            >
              Me contrate
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
