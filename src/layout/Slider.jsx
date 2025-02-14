import reactIcon from "../assets/icon/react_icon.svg";
import javascriptIcon from "../assets/icon/javascript_icon.svg";
import tailwindIcon from "../assets/icon/tailwind_icon.svg";
import htmlIcon from "../assets/icon/html_icon.svg";
import cssIcon from "../assets/icon/css_icon.svg";
import bootstrapIcon from "../assets/icon/bootstrap_icon.svg";
import sassIcon from "../assets/icon/sass_icon.svg";
import figmaIcon from "../assets/icon/figma_icon.svg";

export default function Slider() {
  const ICONS = [
    { img: javascriptIcon, name: "Javascript" },
    { img: reactIcon, name: "React" },
    { img: tailwindIcon, name: "Tailwind" },
    { img: htmlIcon, name: "HTML" },
    { img: cssIcon, name: "CSS" },
    { img: bootstrapIcon, name: "Bootstrap" },
    { img: sassIcon, name: "Sass" },
    { img: figmaIcon, name: "Figma" },
  ];

  // Duplica os ícones para criar o efeito de loop infinito
  const SLIDER = [...ICONS, ...ICONS].map((icon, index) => (
    <div
      key={index}
      className="flex items-center flex-[0_0_auto] mx-10 px-5 gap-2 h-[80px] text-center duration-500 hover:scale-125"
    >
      <img className="h-full" src={icon.img} alt={`Ícone do ${icon.name}`} />
      <p className="text-white text-xl font-semibold">{icon.name}</p>
    </div>
  ));

  return (
    <section className="flex py-10 md:py-20 w-full bg-background overflow-hidden whitespace-nowrap">
      <div className="slider__icons flex animate-scroll">{SLIDER}</div>
    </section>
  );
}
