import Image from 'next/image';
import React from 'react';

export default function Header({
  activeLanguage,
  changeLanguage
}: {
  activeLanguage: String;
  changeLanguage: (lang: string) => void;
}) {
  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <a
          href="#top"
          className="transition duration-300 ease-in-out hover:opacity-70"
        >
          <Image
            src="/images/logo-white.svg"
            alt="Delta Bridge Partners Logo"
            width={80}
            height={18}
          />
        </a>
        <nav className="flex gap-4 items-center">
          <ul className="flex gap-4">
            <li
              className="uppercase text-xs tracking-widest font-medium text-white hover:opacity-70 transition duration-300 ease-in-out"
            >
              <a href="#about">
                {activeLanguage === 'es' ? 'Nosotros' : 'About Us'}
              </a>
            </li>
            <li
              className="uppercase text-xs tracking-widest font-medium text-white hover:opacity-70 transition duration-300 ease-in-out"
            >
              <a href="#offices">
                {activeLanguage === 'es' ? 'Oficinas' : 'Offices'}
              </a>
            </li>
            <li
              className="uppercase text-xs tracking-widest font-medium text-white hover:opacity-70 transition duration-300 ease-in-out"
            >
              <a href="#services">
                {activeLanguage === 'es' ? 'Servicios' : 'Services'}
              </a>
            </li>
            <li
              className="uppercase text-xs tracking-widest font-medium text-white hover:opacity-70 transition duration-300 ease-in-out"
            >
              <a href="/contact">
                {activeLanguage === 'es' ? 'Contacto' : 'Contact'}
              </a>
            </li>
          </ul>
          <ol className="flex gap-2 items-center">
            <li className="transition duration-300 ease-in-out hover:opacity-70 h-6">
            <button onClick={() => changeLanguage('es')}>
                <Image
                  src="/images/flag-es.svg"
                  alt={activeLanguage === 'es' ? 'Bandera de España. Al hacer clic cambiará el idioma a español.' : 'Spanish Flag. Clicking on it will change the language to Spanish.'}
                  width={24}
                  height={24}
                />
              </button>
            </li>
            <li className="transition duration-300 ease-in-out hover:opacity-70 h-6">
              <button onClick={() => changeLanguage('en')}>
                <Image
                  src="/images/flag-us.svg"
                  alt={activeLanguage === 'es' ? 'Bandera de USA. Al hacer clic cambiará el idioma a inglés.' : 'USA Flag. Clicking on it will change the language to English.'}
                  width={24}
                  height={24}
                />
              </button>
            </li>
          </ol>
        </nav>
      </div>
    </header>
  );
};
