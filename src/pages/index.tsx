import { Inter } from "next/font/google";

import Header from '@/components/header';

import { attributes } from '@/content/index.md';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <Header />
      <p>test</p>
    </main>
  );
}
