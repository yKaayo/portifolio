import { motion } from "framer-motion";

export default function Card({ item }) {
  return (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: .6 }}
      viewport={{ once: true }}
    >
      <a
        href={item.link}
        className="bg-dark-blue relative flex justify-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative w-fit rounded-lg transition-transform">
          <img
            src={item.image}
            alt={item.title}
            className="h-min rounded-lg object-contain"
          />
          <div className="absolute bottom-0 h-[25%] w-full rounded-lg bg-linear-to-t from-black/70 from-30% to-transparent"></div>

          <div className="absolute top-4 left-4 rounded-md border-green-500/30 bg-green-500/80 px-2 py-1 text-green-950">
            {item.category}
          </div>

          <h3 className="absolute bottom-4 left-4 z-[1] text-white transition-colors group-hover:text-green-400">
            {item.title}
          </h3>
        </div>
      </a>
    </motion.div>
  );
}
