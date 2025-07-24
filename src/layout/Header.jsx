import { NavLink } from "react-router";

export default function Header({ className }) {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Projetos", link: "/projetos" },
  ];

  return (
    <div className="relative flex w-full justify-center">
      <header
        className={`absolute z-[1] rounded-md px-3 pt-5 pb-2 ${className}`}
      >
        <ul className={`flex w-fit gap-5 rounded-md bg-black/80 backdrop-blur-xl px-5 py-3`}>
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
    </div>
  );
}
