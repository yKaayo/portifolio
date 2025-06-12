import { NavLink } from "react-router";

// Components
import RoundedBorder from "../components/RoundedBorder";

export default function Header({ className, background = true }) {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Projetos", link: "/projetos" },
  ];

  return (
    <header
      className={`bg-dark-blue absolute top-0 z-[1] rounded-md px-3 pb-2 ${className}`}
    >
      <RoundedBorder className="-left-5 shadow-[10px_-10px_0_#1e2939]" />
      <RoundedBorder className="-right-5 shadow-[-10px_-10px_0_#1e2939]" />
      <ul
        className={`flex w-fit gap-5 rounded-md px-5 py-3 ${background ? "bg-black" : "border border-gray-700 bg-gray-800/80 backdrop-blur-md"}`}
      >
        {navLinks.map((link) => (
          <NavLink
            to={link.link}
            key={link.name}
            className={`nav__link ${({ isActive }) => (isActive ? "active" : "")}`}
          >
            <li>{link.name}</li>
          </NavLink>
        ))}
      </ul>
    </header>
  );
}
