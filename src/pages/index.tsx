import React, { useState, useEffect } from 'react';
import { Inter } from "next/font/google";

import Header from '@/components/header';

import { attributes } from '@/content/index.md';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { en, es } = attributes;
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    window.localStorage.setItem('language', lang);
  }

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem('language');
    changeLanguage(storedLanguage ? storedLanguage : 'en');
  }, []);

  return (
    <main
      className={`${inter.className}`}
    >
      <Header
        activeLanguage={language}
        changeLanguage={changeLanguage}
      />
      <p>test</p>
    </main>
  );
}
