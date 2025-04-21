import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata = {
  title: 'Ega-Denko株式会社 - 信頼と実績の電気工事',
  description: 'Ega-Denko株式会社は、電気工事・設備管理・省エネ提案など、電気に関するあらゆるサービスを提供しています。',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://ega-denko.co.jp/',
    siteName: 'Ega-Denko株式会社',
  },
  twitter: {
    handle: '@ega_denko',
    site: '@ega_denko',
    cardType: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
