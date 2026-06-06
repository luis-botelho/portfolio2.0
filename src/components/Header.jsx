import React from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItens = [
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
    <header className="relative z-50 px-6 py7">
      <div className="max-w-7xl mx-auto flex  justify-between items-center">
        {/* Logo */}
        <div className="text-white text-3x1 font-black cursor-pointer">
          PORTIFOLIO <span className="text-primary">.</span>
        </div>
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8">
            {menuItens.map((item) => (
              <li key={item.name}>
                <button onClick={() => scrollToSection(item.href)}
                  className="text-gray hover:text-white text-base font-medium transition-colors">
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          <button onClick ={() => scrollToSection("#contact")}  className="bg-primary text-white px-6 py-2.5 rounded-lg text-base font-semibold hover:bg-primary/90 transition-all">
            Contact Me
          </button>
        </nav>
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>
      
    </header>
  );
}

export default Header;
