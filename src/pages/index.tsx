import { Inter } from "next/font/google";

import { attributes } from '@/content/index.md';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <p>test</p>
    </main>
  );
}
