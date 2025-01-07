import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
        <span className="text-2xl font-bold text-white">CV</span>
      </div>
      <span className="text-xl font-bold text-gray-800 dark:text-white">CryptoVault</span>
    </Link>
  );
}

