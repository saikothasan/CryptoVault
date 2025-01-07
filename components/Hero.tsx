import SecretGenerator from './SecretGenerator';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          CryptoVault
        </h1>
        <p className="text-xl text-center mb-12 text-gray-600 dark:text-gray-300">
          Generate secure, random secrets for your Next.js applications with ease.
        </p>
        <SecretGenerator />
      </div>
    </section>
  );
}

