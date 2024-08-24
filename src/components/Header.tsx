import React, { useState } from 'react';

export default function Header({
  isScrolled
}: {
  isScrolled: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`fixed top-0 w-full z-10 p-4 ${isScrolled || isOpen ? 'bg-white' : ''}`}>
      <div className="container mx-auto flex md:items-center justify-between">
        <a
          href="#top"
          className="transition duration-300 ease-in-out hover:opacity-70 relative top-1 md:top-0"
        >
          <svg fill="none" height="18" viewBox="0 0 80 18" width="80" xmlns="http://www.w3.org/2000/svg" className={`${isScrolled || isOpen ? 'fill-stone-800' : 'fill-white'}`}>
            <g>
              <path clipRule="evenodd" d="m69.0479 0 10.354 17.9337-8.4823-.0133-6.0957-10.59869zm-5.2873 9.00002 5.154 8.92698-10.3023-.0033z" fillRule="evenodd" className={`${isScrolled || isOpen ? 'fill-indigo-600' : 'fill-white'}`} />
              <path d="m44.5493 3.56808v-3.524684h15.1772v3.524684h-5.4448v14.43192h-4.2788v-14.43192z" />
              <path d="m33.2739 18v-17.956604h4.3401v14.431904h7.4703v3.5247z" />
              <path d="m18.0356 18v-17.956604h12.5206v3.524684h-8.1805v3.68251h7.5404v3.53341h-7.5404v3.6913h8.1805v3.5247z" />
              <path d="m6.63728 18h-6.63728v-17.956604h6.62851c1.82956 0 3.40489.359483 4.72589 1.078444 1.3269.71312 2.3498 1.74189 3.0687 3.0863.719 1.33856 1.0785 2.94015 1.0785 4.80479 0 1.87047-.3595 3.47797-1.0785 4.82237-.7131 1.3444-1.7331 2.3761-3.0599 3.095-1.3269.7131-2.9022 1.0697-4.72592 1.0697zm-2.29718-3.7h2.13059c1.00538 0 1.85587-.1696 2.55145-.5086.70143-.3448 1.23046-.9031 1.58696-1.6746.3624-.7775.5436-1.8121.5436-3.10387 0-1.2918-.1812-2.32056-.5436-3.08629-.3624-.77157-.89722-1.32687-1.6045-1.6659-.70143-.34487-1.56652-.5173-2.59529-.5173h-2.06921z" />
            </g>
          </svg>
        </a>
        <nav className="flex gap-4 items-end md:items-center flex-col md:flex-row w-screen md:w-auto">
          <ul className={`gap-4 ${isOpen === true ? 'flex flex-col my-8 w-full text-center order-last relative -left-8' : 'hidden md:flex'}`}>
            <li
              className={`uppercase md:text-xs tracking-widest font-medium ${isScrolled || isOpen ? 'text-stone-800' : 'text-white'} hover:opacity-70 transition duration-300 ease-in-out`}
            >
              <a href="#about">
                About Us
              </a>
            </li>
            <li
              className={`uppercase md:text-xs tracking-widest font-medium ${isScrolled || isOpen ? 'text-stone-800' : 'text-white'} hover:opacity-70 transition duration-300 ease-in-out`}
            >
              <a href="#offices">
                Offices
              </a>
            </li>
            <li
              className={`uppercase md:text-xs tracking-widest font-medium ${isScrolled || isOpen ? 'text-stone-800' : 'text-white'} hover:opacity-70 transition duration-300 ease-in-out`}
            >
              <a href="#services">
                Services
              </a>
            </li>
            <li
              className={`uppercase md:text-xs tracking-widest font-medium ${isScrolled || isOpen ? 'text-stone-800' : 'text-white'} hover:opacity-70 transition duration-300 ease-in-out`}
            >
              <a href="/contact">
                Contact
              </a>
            </li>
          </ul>
          <button className="flex items-center transition duration-300 ease-in-out hover:opacity-70 md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg
              fill="none"
              height="18"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 18"
              className={`${isScrolled || isOpen ? 'fill-stone-800' : 'fill-white'}`}
            >
              <g><path d="m0 8h24v2h-24z"/><path d="m0 0h24v2h-24z"/><path d="m0 16h24v2h-24z"/></g>
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};
