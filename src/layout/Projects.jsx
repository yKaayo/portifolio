import { useEffect, useState } from "react";
import githubApi from "../services/GithubApi";
import bannerFutureEnergy from "../assets/img/banner_future_energy.webp";
import advogadaCamilla from "../assets/img/advogada-camilla.webp";
import techseas from "../assets/img/techseas.webp";
import myTrip from "../assets/img/mytrip.webp";
import cicHome from "../assets/img/cichome.webp";
import previsaoDoTempo from "../assets/img/previsaodotempo.webp";
import myDrones from "../assets/img/mydrone.webp";
import cloudMe from "../assets/img/cloudme.webp";

export default function Projects() {
  const [allProjects, setAllProjects] = useState([]);
  const [err, setErr] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(0);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setVisibleProjects(3);
      } else if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
        setVisibleProjects(4);
      } else {
        setVisibleProjects(6);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

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

  function handleVisibleProjects() {
    setVisibleProjects(
      (prevVisibleProjects) => prevVisibleProjects + prevVisibleProjects
    );
  }

  return (
    <section className="py-5 bg-background">
      <div className="flex flex-col items-center gap-10 container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white">
          Meus <span className="text__gradient--green">Projetos</span> 
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-between gap-x-20 gap-y-10 w-full px-5 md:px-10">
          {err && <p>{err}</p>}

          {projectsIndex.slice(0, visibleProjects).map((project) => {
            if (allProjects[project.id]) {
              return (
                <li
                  className="w-full rounded-2xl bg-cover aspect-[19.4/9] hover:scale-110 duration-300 shadow-2xl border-2 border-black"
                  style={{ backgroundImage: `url(${project.img})` }}
                  key={project.id}
                >
                  <a
                    className="flex justify-start items-end h-full rounded-xl bg-gradient-to-t from-black to-transparent text-white font-semibold ps-5 pb-5 "
                    href={`${project.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </a>
                </li>
              );
            }
            return null;
          })}
        </ul>

        {visibleProjects < projectsIndex.length && (
          <button className="px-6 py-2 rounded-2xl mt-5 hover:text-black bg-transparent border-2 border-white text-2xl font-bold duration-300 cursor-pointer hover:bg-white hover:scale-110 text-white" onClick={handleVisibleProjects}>VER MAIS</button>
        )}
      </div>
    </section>
  );
}
