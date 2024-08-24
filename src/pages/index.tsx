import React, { useState, useEffect } from 'react';
import { Inter } from "next/font/google";

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Text from '@/components/Text';
import List from '@/components/List';
import Map from '@/components/Map';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Quote from '@/components/Quote';
import Contact from '@/components/Contact';

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
  bgColor?: string;
  items?: Array<Item>;
  stats?: Array<Stat>;
  services?: Array<Service>;
}

interface Item {
  title: string;
  content: string;
}

interface Stat {
  number: string;
  content: string;
  prepend?: string;
  append?: string;
}

interface Service {
  title?: string;
  subtitle?: string;
  content?: string;
  bgColor?: string;
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
                ctaText={section.ctaText || "Learn more"}
                ctaLink={section.ctaLink || "#"}
                key={`${index}`}
                id={section.id || ""}
                bgColor={section.bgColor || "bg-indigo-600"}
              />
            );
          case 'list':
            return (
              <List
                title={section.title || "Delta Bridge Partners"}
                id={section.id || ""}
                content={section.content || ""}
                key={`${index}`}
                items={section.items || []}
                bgColor={section.bgColor || "bg-stone-100"}
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
                image={section.image || ""}
                stats={section.stats || []}
                key={`${index}`}
              />
            );
          case 'services':
            return (
              <Services
                id={section.id || ""}
                image={section.image || ""}
                services={section.services || []}
                key={`${index}`}
              />
            );
          case 'quote':
            return (
              <Quote
                key={`${index}`}
                quote={section.content || ""}
                bgColor={section.bgColor || "bg-stone-100"}
                ctaText={section.ctaText || "Learn more"}
                ctaLink={section.ctaLink || "#"}
              />
            );
          case 'contact':
            return (
              <Contact
                key={`${index}`}
                id={section.id || ""}
                title={section.title || ""}
                content={section.content || ""}
                image={section.image || ""}
              />
            );
          default:
            break;
        }
      })}
    </main>
  );
}
