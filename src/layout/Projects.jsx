// Components
import Card from "../components/Card";

// Constraints
import { projects } from "../constraints/projects";

export default function Projects() {
  return (
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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.link} item={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
