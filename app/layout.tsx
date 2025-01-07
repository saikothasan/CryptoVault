import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster"
import Script from 'next/script';
import TelegramJoin from '@/components/TelegramJoin';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className={`${inter.className} antialiased`}>
        <TelegramJoin />
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}

