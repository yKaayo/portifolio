import { motion } from "framer-motion";

// Components
import Card from "../components/Card";
import DarkVeil from "../components/DarkVeil";

// Constraints
import { projects } from "../constraints/projects";

export default function Projects() {
  const getIsLargeNum = () => {
    if (window.innerWidth >= 640 && window.innerWidth < 1024) {
      return 3;
    } else if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
      return 4;
    } else if (window.innerWidth >= 1280) {
      return 3;
    }
  };

  return (
    <>
      <div className="fixed h-screen w-full">
        <DarkVeil />
      </div>

      <section className="section">
        <div className="relative px-4 pt-32 pb-5 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl">
              Meus{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Projetos
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-300">
              Uma coleção dos meus trabalhos mais recentes, desde aplicações
              full-stack até interfaces modernas e APIs robustas.
            </p>
          </div>

          <div className="container mx-auto mb-16">
            <div className="grid grid-cols-1 gap-5 sm:auto-rows-min sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {projects.map((project, index) => {
                const isLarge = index % getIsLargeNum() === 0;

                return (
                  <motion.div
                    key={project.link}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={` ${isLarge && window.innerWidth >= 640 ? "col-span-2 row-span-2" : ""} h-min rounded-lg bg-white shadow overflow-hidden` }
                  >
                    <Card item={project} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
