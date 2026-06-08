import React from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  // Corrigido para menuItems (padrão)
  const menuItems = [
    { name: "Education", link: "#education" },
    { name: "Certificates", link: "#certificates" },
    { name: "About Me", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
  ];

  const scrollToSection = (href) => {
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // Corrigido py7 para py-7
    <header className="relative z-50 px-6 py-7">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo - Corrigido 3x1 para 3xl */}
        <div className="text-white text-3xl font-black cursor-pointer">
          PORTIFOLIO <span className="text-primary">.</span>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.link)}
                  className="text-gray-300 hover:text-white text-base font-medium transition-colors"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => scrollToSection("#contact")}
            className="bg-primary text-white px-6 py-2.5 rounded-lg text-base font-semibold hover:bg-primary/90 transition-all"
          >
            Contact Me
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#111827] z-50 transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } p-8 flex flex-col`}
      >
        <button
          className="self-end text-white mb-10"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={32} />
        </button>
        <ul className="flex flex-col gap-8">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollToSection(item.link)}
                className="text-white text-xl font-semibold hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            </li>
          ))}
          <li className="pt-6">
            <button
              onClick={() => scrollToSection("#contact")}
              className="w-full bg-primary text-white py-4 rounded-xl text-lg font-bold"
            >
              Contact Me
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;