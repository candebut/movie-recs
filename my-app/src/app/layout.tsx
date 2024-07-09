import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import localFont from 'next/font/local';
const craft = localFont({ src: '../assets/fonts/CraftVintage.otf' });
const graffiti = localFont({ src: '../assets/fonts/GRAFFITI.ttf' });
const invasion2000 = localFont({ src: '../assets/fonts/INVASION2000.ttf' });
const rainbowIt = localFont({ src: '../assets/fonts/Rainbow2000-Italic.ttf' });
const rainbow = localFont({ src: '../assets/fonts/Rainbow2000-Regular.ttf' });
const tagHandTrash = localFont({ src: '../assets/fonts/TagHandTrash.otf' });
const theVintage = localFont({ src: '../assets/fonts/TheVintage.otf' });
const vintageOne = localFont({ src: '../assets/fonts/VintageOne.ttf' });
const zai = localFont({ src: '../assets/fonts/zai_HongKongGraffiti.ttf' });
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Te recomiendo esta peli',
  description: 'Recomendador de películas que te tocaron el corazón',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={invasion2000.className}>{children}</body>
    </html>
  );
}
