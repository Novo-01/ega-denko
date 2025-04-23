import type { Metadata } from 'next';
import { Dancing_Script, Great_Vibes, Parisienne, Sacramento } from 'next/font/google';
import './globals.css';

const dancingScript = Dancing_Script({ subsets: ['latin'] });
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400' });
const parisienne = Parisienne({ subsets: ['latin'], weight: '400' });
const sacramento = Sacramento({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'ega-denko',
  description: '電気工事のプロフェッショナル',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={sacramento.className}>{children}</body>
    </html>
  );
}
