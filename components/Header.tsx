'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex space-x-4">
          <Button variant="ghost" onClick={() => scrollTo('about')}>About</Button>
          <Button variant="ghost" onClick={() => scrollTo('features')}>Features</Button>
          <Button variant="ghost" onClick={() => scrollTo('faq')}>FAQ</Button>
          <Link href="/api-docs" passHref>
            <Button variant="ghost">API Docs</Button>
          </Link>
        </nav>
        <Button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white">
          Get Started
        </Button>
      </div>
    </header>
  );
}

