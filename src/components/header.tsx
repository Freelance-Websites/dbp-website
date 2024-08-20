import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between bg-gray-800">
      <Link
        href="#top"
      >
        <Image
          src="/images/logo-white.svg"
          alt="Delta Bridge Partners Logo"
          width={80}
          height={18}
        />
      </Link>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;