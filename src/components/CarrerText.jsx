import { useEffect, useState } from "react";

export default function CarrerText() {
  const carrerText = [
    { text: "Dev Frontend", width: "12ch" },
    { text: "Dev Web", width: "8ch" },
    { text: "Web Design", width: "10.5ch" },
    { text: "UI/UX", width: "6ch" },
  ];

  if (window.innerWidth >= 768) {
    const newText = [
      { text: "Programador Frontend", width: "19.5ch" },
      { text: "Desenvolvedor Web", width: "17ch" },
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
        prevIndex === carrerText.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(timer);
  });

  return (
    <>
      <style>{keyframe}</style>
      <span
        id="carrerText"
        className="gradient--green mx-auto mt-2 block overflow-hidden border-r-8 border-white bg-clip-text whitespace-nowrap text-transparent md:h-[70px]"
      >
        {carrerText[index].text}
      </span>
    </>
  );
}
