import { useEffect, useState } from "react";
import RoundedBorder from "../components/RoundedBorder";
import arrowsBottomChevronIcon from "../assets/icon/arrows_bottom_chevron.svg"

export default function Hero() {
  const carrerText = [
    { text: "Dev Frontend", width: "12ch" },
    { text: "Dev Web", width: "8ch" },
    { text: "Web Design", width: "10.5ch" },
  ];

  if (window.innerWidth >= 768) {
    const newText = [
      { text: "Programador Frontend", width: "19.5ch" },
      { text: "Desenvolvedor Web", width: "17ch" },
      { text: "Web Design", width: "10.5ch" },
    ];

    for (let i = 0; i < newText.length; i++) {
      carrerText[i] = newText[i];
    }
  }

  const [index, setIndex] = useState(0);

  const keyframe = `
    @keyframes writing {
      0% { width: 0; }
      20% { width: ${carrerText[index].width}; }
      50% { width: ${carrerText[index].width}; }
      85% { width: 0; }
      100% { width: 0; }
    }`;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === carrerText.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex justify-center items-center h-screen p-5 bg-background">
      <section className="hero">
        <RoundedBorder class="top-0 left-[106px] shadow-[-10px_-10px_0_#1e2939]" />
        <RoundedBorder class="top-[64px] left-0 shadow-[-10px_-10px_0_#1e2939]" />

        <div className="absolute top-0 left-0 z-[1] pb-2 pe-2 rounded-br-md bg-background">
          <div className="px-5 py-3 w-fit rounded-md bg-black">
            <h1 className="text-2xl text-white font-bold">CAIO</h1>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <p className="px-3 py-1 text-white rounded-md border-2 border-white">
            Hello, World!
          </p>

          <style>{keyframe}</style>

          <h2 className="text-4xl md:text-6xl font-bold text-center text-white">
            Eu sou Caio,
            <span
              id="carrerText"
              className="block overflow-hidden md:h-[70px] whitespace-nowrap border-r-8 text-primary-green border-white mx-auto mt-2"
            >
              {carrerText[index].text}
            </span>
          </h2>
        </div>

        <div className="absolute bottom-40 right-8 text-white">
          <p className="font-bold text-primary-green text-xl text-end">+ 1 ANO</p>
          <p>DE EXPERIÊNCIA</p>
        </div>

        <img className="absolute bottom-8 h-16" src={arrowsBottomChevronIcon} alt="" />
      </section>
    </main>
  );
}
