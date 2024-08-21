import React, { useState, useEffect } from 'react';
import { Inter } from "next/font/google";

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Text from '@/components/Text';
import List from '@/components/List';

import { attributes } from '@/content/index.md';

const inter = Inter({ subsets: ["latin"] });

interface Section {
  id?: string;
  type: string;
  video?: string;
  title?: string;
  content?: string;
  ctaText?: string;
  ctaLink?: string;
  items?: Array<Item>;
}

interface Item {
  title: string;
  content: string;
}

export default function Home() {
  const { en, es } = attributes;
  const [language, setLanguage] = useState('en');
  const [selectedContentSource, setSelectedContentSource] = useState(language === 'en' ? JSON.stringify(en) : JSON.stringify(es));

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    setSelectedContentSource(lang);
    window.localStorage.setItem('language', lang === 'en' ? JSON.stringify(en) : JSON.stringify(es));
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
      {JSON.parse(selectedContentSource).sections.map((section: Section, index: Number) => {
        switch(section.type) {
          case 'hero':
            return (
              <Hero
                video={section.video || ""}
                title={section.title || "Delta Bridge Partners"}
                key={`${index}`}
                id={section.id || ""}
              />
            );
          case 'text':
            return (
              <Text
                title={section.title || "Delta Bridge Partners"}
                content={section.content || ""}
                ctaText={section.ctaText}
                ctaLink={section.ctaLink}
                key={`${index}`}
                id={section.id || ""}
              />
            );
          case 'list':
            return (
              <List
                title={section.title || "Delta Bridge Partners"}
                content={section.content || ""}
                key={`${index}`}
                items={section.items || []}
              />
            );
          default:
            break;
        }
      })}
    </main>
  );
}
