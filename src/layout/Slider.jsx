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

  const SLIDER = [...ICONS, ...ICONS].map((icon, index) => (
    <div
      key={index}
      className="mx-10 flex h-[80px] flex-[0_0_auto] items-center gap-2 px-5 text-center duration-500 hover:scale-125"
    >
      <img className="h-full" src={icon.img} alt={`Ícone do ${icon.name}`} />
      <p className="text-xl font-semibold text-white">{icon.name}</p>
    </div>
  ));

  return (
    <section className="bg-dark-blue flex max-h-[240px] w-full overflow-hidden py-10 whitespace-nowrap md:py-20">
      <div className="slider__icons animate-scroll flex h-fit">{SLIDER}</div>
    </section>
  );
}
