import React, { useState } from 'react';
import Image from 'next/image';

export default function Header({
  activeLanguage,
  changeLanguage
}: {
  activeLanguage: String;
  changeLanguage: (lang: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex md:items-center justify-between">
        <a
          href="#top"
          className="transition duration-300 ease-in-out hover:opacity-70 relative top-1 md:top-0"
        >
          <Image
            src="/images/logo-white.svg"
            alt="Delta Bridge Partners Logo"
            width={80}
            height={18}
          />
        </a>
        <nav className="flex gap-4 items-end md:items-center flex-col md:flex-row w-screen md:w-auto">
          <ul className={`gap-4 ${isOpen === true ? 'flex flex-col my-8 w-full text-center order-last relative -left-8' : 'hidden md:flex'}`}>
            <li
              className="uppercase md:text-xs tracking-widest font-medium text-white hover:opacity-70 transition duration-300 ease-in-out"
            >
              <a href="#about">
                {activeLanguage === 'es' ? 'Nosotros' : 'About Us'}
              </a>
            </li>
            <li
              className="uppercase md:text-xs tracking-widest font-medium text-white hover:opacity-70 transition duration-300 ease-in-out"
            >
              <a href="#offices">
                {activeLanguage === 'es' ? 'Oficinas' : 'Offices'}
              </a>
            </li>
            <li
              className="uppercase md:text-xs tracking-widest font-medium text-white hover:opacity-70 transition duration-300 ease-in-out"
            >
              <a href="#services">
                {activeLanguage === 'es' ? 'Servicios' : 'Services'}
              </a>
            </li>
            <li
              className="uppercase md:text-xs tracking-widest font-medium text-white hover:opacity-70 transition duration-300 ease-in-out"
            >
              <a href="/contact">
                {activeLanguage === 'es' ? 'Contacto' : 'Contact'}
              </a>
            </li>
          </ul>
          <ol className="flex gap-4 md:gap-2 items-center">
            <li className="transition duration-300 ease-in-out hover:opacity-70">
            <button className="flex items-center" onClick={() => changeLanguage('es')}>
                <Image
                  src="/images/flag-es.svg"
                  alt={activeLanguage === 'es' ? 'Bandera de España. Al hacer clic cambiará el idioma a español.' : 'Spanish Flag. Clicking on it will change the language to Spanish.'}
                  width={24}
                  height={24}
                />
              </button>
            </li>
            <li className="transition duration-300 ease-in-out hover:opacity-70">
              <button className="flex items-center" onClick={() => changeLanguage('en')}>
                <Image
                  src="/images/flag-us.svg"
                  alt={activeLanguage === 'es' ? 'Bandera de USA. Al hacer clic cambiará el idioma a inglés.' : 'USA Flag. Clicking on it will change the language to English.'}
                  width={24}
                  height={24}
                />
              </button>
            </li>
            <li className="transition duration-300 ease-in-out hover:opacity-70 md:hidden">
              <button className="flex items-center" onClick={() => setIsOpen(!isOpen)}>
                <svg fill="none" height="18" viewBox="0 0 24 18" width="24" xmlns="http://www.w3.org/2000/svg" className="fill-white"><g><path d="m0 8h24v2h-24z"/><path d="m0 0h24v2h-24z"/><path d="m0 16h24v2h-24z"/></g></svg>
              </button>
            </li>
          </ol>
        </nav>
      </div>
    </header>
  );
};
