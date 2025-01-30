export default function Header() {
  return (
    <header className="absolute top-0 right-0 w-[calc(100%-106px)] h-16 rounded-tr-md bg-linear-to-b from-black from-20% to-transparent">
      <nav className="px-5 md:px-10 h-full">
        <ul className="hidden md:flex items-center justify-center md:gap-20 lg:gap-40 h-full">
          <li>
            <a href="#home" className="nav__link active">Início</a>
          </li>
          <li>
            <a href="" className="nav__link">Sobre mim</a>
          </li>
          <li>
            <a href="" className="nav__link">Projetos</a>
          </li>
          <li>
            <a href="" className="nav__link">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
