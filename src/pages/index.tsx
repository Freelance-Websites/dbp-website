import React, { useState, useEffect } from 'react';
import { Inter } from "next/font/google";

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Text from '@/components/Text';
import List from '@/components/List';
import Map from '@/components/Map';

import { attributes } from '@/content/index.md';

const inter = Inter({ subsets: ["latin"] });

interface Section {
  id?: string;
  type: string;
  video?: string;
  subtitle?: string;
  title?: string;
  image?: string;
  content?: string;
  ctaText?: string;
  ctaLink?: string;
  items?: Array<Item>;
  stats?: Array<Stat>;
}

interface Item {
  title: string;
  content: string;
}

interface Stat {
  number: string;
  content: string;
}

export default function Home() {
  const { sections } = attributes;
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 900) {
    setIsScrolled(true);
    } else {
    setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
    window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main
      className={`${inter.className}`}
    >
      <Header
        isScrolled={isScrolled}
      />
      {sections.map((section: Section, index: Number) => {
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
          case 'map':
            return (
              <Map
                title={section.title || "Delta Bridge Partners"}
                subtitle={section.subtitle || ""}
                image={section.image || ""}
                key={`${index}`}
                id={section.id || ""}
              />
            );
          case 'stats':
            return (
              <Stats
                title={section.title || "Delta Bridge Partners"}
                stats={section.stats || []}
                key={`${index}`}
                id={section.id || ""}
              />
            );
          default:
            break;
        }
      })}
    </main>
  );
}
