import { Link } from "react-router";

// Components
import Header from "./Header";
import Card from "../components/Card";

// Constraints
import { projects } from "../constraints/projects";

export default function Projects() {
  return (
    <section className="section">
      <Header className="top-5" background={false} />

      <div className="relative px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-5xl font-bold md:text-7xl text-white">
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

          {/* Featured Projects */}
          <div className="mb-16">
            <h2 className="mb-8 flex items-center text-2xl font-bold text-white">
              <span className="gradient--green mr-3 h-2 w-2 rounded-full"></span>
              Projetos em Destaque
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              {projects
                .filter((project) => project.featured)
                .map((project) => (
                  <Card key={project.link} item={project} />
                ))}
            </div>
          </div>

          {/* All Projects Grid */}
          {/* <div>
            <h2 className="mb-8 flex items-center text-2xl font-bold text-white">
              <span className="gradient--green mr-3 h-2 w-2 rounded-full"></span>
              Todos os Projetos
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group border-gray-700 bg-gray-800/30 backdrop-blur-sm transition-all duration-300 hover:border-green-500/50"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3">
                      <div className="bg-gray-900/80 text-xs text-gray-300">
                        {project.category}
                      </div>
                    </div>
                  </div>

                  <div className="pb-3">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg text-white transition-colors group-hover:text-green-400">
                        {project.title}
                      </h3>
                      <span className="text-xs text-gray-400">
                        {project.date}
                      </span>
                    </div>
                    <p className="line-clamp-2 text-sm text-gray-400">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-0">
                    <div className="mb-4 flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <div
                          key={tech}
                          className="border-gray-600 text-xs text-gray-400"
                        >
                          {tech}
                        </div>
                      ))}
                      {project.technologies.length > 3 && (
                        <div className="border-gray-600 text-xs text-gray-400">
                          +{project.technologies.length - 3}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
