export default function Card({ item }) {
  return (
    <div key={item.id}>
      <a
        href={item.link}
        className="bg-dark-blue relative"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={item.image}
          alt={item.title}
          className="h-60 object-contain transition-transform duration-300 hover:scale-105"
        />

        <div className="absolute top-4 left-4 border-green-500/30 bg-green-500/20 text-green-400 py-1 px-2 rounded-md">
          {item.category}
        </div>

        <h3 className="absolute bottom-4 left-4 text-white transition-colors group-hover:text-green-400">
          {item.title}
        </h3>
      </a>

      <p className="my-3 text-gray-300">{item.description}</p>

      <div>
        <div className="mb-4 flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <div key={tech} className="border-green-500/30 bg-green-500/20 text-green-400 py-1 px-2 rounded-md">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
