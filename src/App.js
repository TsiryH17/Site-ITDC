import './index.css';
import { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { IoMdCall } from "react-icons/io";

function App() {
  const navLinks = [
    { name: "Accueil", href: "#Acceuil" },
    { name: "À propos", href: "#About" },
    { name: "Nos Services", href: "#" },
    { name: "Partenaires", href: "#" },
    { name: "Formations", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App relative h-screen">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white px-4 py-2 shadow">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/images/LOGONoBackground.png"
              alt="ITDC logo"
              className="h-[50px] w-auto"
            />
          </div>

          {/* Desktop navigation */}
          <ul className="hidden sm:flex items-center space-x-6 text-sm font-medium ">
            {navLinks.map((link, index) => (
              <li key={index} className="text-[13px] capitalize tracking-widest cursor-pointer text-black/80 relative group">
                <a href={link.href} className="hover:text-[#0faae7] group">
                  {link.name}
                </a>
                <div className="w-full h-[2px] bg-[#0faae7] opacity-60 mt-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </li>
            ))}
            <li>
              <a href="tel:+261345263787" className="bg-itdc text-white flex items-center gap-2 px-4 py-2 rounded 
             hover:bg-[#0faae7]  transition-all duration-200">
              <IoMdCall className="text-xl" />  Contactez-nous
              </a>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden text-2xl text-itdc cursor-pointer focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
            <ul
              className="sm:hidden flex flex-col items-start gap-3 mt-4 px-4 text-sm font-medium 
                        animate-slide-down origin-top cursor-pointer bg-white shadow-md rounded"
            >
              {navLinks.map((link, index) => (
                <li key={index} className="text-[13px] tracking-widest text-black/80 cursor-pointer relative group">
                  <a href={link.href} className="hover:text-[#0faae7] group">
                    {link.name}
                  </a>
                  <div className="w-full h-[2px] bg-[#0faae7] opacity-60 mt-1 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                </li>
              ))}
              <li>
              <a href="tel:+261345263787" className="bg-itdc text-white cursor-pointer px-4 py-2 rounded hover:bg-[#e79f53] flex items-center gap-2">
                <IoMdCall /> Contactez-nous
                
              </a>
              </li>
            </ul>
          )}
      </header>

      {/* SECTION ACCUEIL */}
      <section id ="Acceuil"
        className=" relative h-[60%] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: "url('/images/fond1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

        <div className="z-10 flex flex-col items-center text-center gap-4 px-4 mt-[70px] max-w-3xl">
          <h1 className="text-4xl text-white font-bold drop-shadow-lg">
            ITDC <span className="text-itdc">Mada</span> – Experts en solutions numériques innovantes
          </h1>
          <div className="w-[200px] h-[4px] bg-[#0faae7] opacity-60 rounded"></div>
          <p className="text-2xl text-white font-light">
            Depuis 2017, nous transformons le numérique et les données environnementales en leviers de croissance pour les entreprises à Madagascar.
          </p>
          <a href="tel:+261345263787" className="bg-itdc text-white flex items-center gap-2 px-4 py-2 rounded 
             hover:shadow-[10px_11px_0_#0faae7] transition-all duration-700">
          <IoMdCall className="text-2xl" /> Contactez-nous
          </a>
        </div>
      </section>3

      {/* SECTION À PROPOS */}
      <section id ="About" className=" py-16 px-4 bg-blue h-96">
        <p>
          HSDFQDHUSQHDUSQHDISQIDJSQIODJISQJDISQOJDIOSQ
        </p>
      </section>
    </div>
  );
}

export default App;
