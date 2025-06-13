export default function Card({ item }) {
  return (
    <div key={item.id}>
      <a
        href={item.link}
        className="bg-dark-blue relative"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative w-fit transition-transform duration-300 hover:scale-105">
          <img
            src={item.image}
            alt={item.title}
            className="h-60 object-contain"
          />
          <div className="absolute bottom-0 h-[25%] w-full bg-linear-to-t from-black/70 from-30% to-transparent"></div>
        </div>

        <div className="absolute top-4 left-4 rounded-md border-green-500/30 bg-green-500/50 px-2 py-1 text-green-400">
          {item.category}
        </div>

        <h3 className="absolute bottom-4 left-4 z-[1] text-white transition-colors group-hover:text-green-400">
          {item.title}
        </h3>
      </a>

      <p className="my-3 text-gray-300">{item.description}</p>

      <div>
        <div className="mb-4 flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <div
              key={tech}
              className="rounded-md border-green-500/30 bg-green-500/20 px-2 py-1 text-green-400"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
