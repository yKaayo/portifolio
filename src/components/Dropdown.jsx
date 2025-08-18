import { useState, useRef, useEffect } from "react";

const Dropdown = ({ label = "Menu", items = [] }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none"
      >
        {label}
      </button>

      {open && (
        <div className="absolute right-0 z-10 mt-2 w-48 rounded-lg border border-gray-200 bg-white shadow-lg">
          {items.length > 0 ? (
            items.map((item, index) => (
              <button
                key={index}
                onClick={item.onClick}
                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
              >
                {item.label}
              </button>
            ))
          ) : (
            <span className="block px-4 py-2 text-gray-500">Sem itens</span>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
