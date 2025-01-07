import { Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">CryptoVault</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Secure Secret Generation for Next.js</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} CryptoVault. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

