import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ErrorBoundary from '@/components/ErrorBoundary';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: 'CryptoVault - Advanced Secret Generator',
  description: 'Generate secure, random secrets, passwords, and encryption keys for your Next.js applications with CryptoVault. Features multiple cryptographic functions and an easy-to-use interface.',
  keywords: 'Next.js, cryptography, secret generator, password generator, encryption key, web security, CryptoJS',
  openGraph: {
    title: 'CryptoVault - Advanced Secret Generator for Next.js',
    description: 'Generate secure, random secrets, passwords, and encryption keys for your Next.js applications with ease.',
    images: [{ url: '/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CryptoVault - Advanced Secret Generator for Next.js',
    description: 'Generate secure, random secrets, passwords, and encryption keys for your Next.js applications with ease.',
    images: ['/og-image.png'],
  },
};

export default function Home() {
  return (
    <ErrorBoundary>
      <main className="flex-grow">
        <Header />
        <Hero />
        <About />
        <Features />
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Public API</h2>
            <p className="text-center mb-4">CryptoVault offers a public API for generating secure secrets programmatically. Integrate our powerful cryptographic functions into your own applications with ease.</p>
            <div className="flex justify-center">
              <Link href="/api-docs" passHref>
                <Button variant="outline" className="mr-4">View API Documentation</Button>
              </Link>
              <Button>Get API Key</Button>
            </div>
          </div>
        </section>
        <FAQ />
      </main>
      <Footer />
    </ErrorBoundary>
  );
}

