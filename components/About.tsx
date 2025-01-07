import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Key } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">About CryptoVault</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700">
            <CardHeader>
              <Shield className="w-12 h-12 text-purple-500 mb-4" />
              <CardTitle>Secure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Built with industry-standard cryptographic functions to ensure the highest level of security for your secrets, passwords, and encryption keys.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700">
            <CardHeader>
              <Lock className="w-12 h-12 text-indigo-500 mb-4" />
              <CardTitle>Private</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Your secrets and passwords are generated client-side, ensuring that sensitive information never leaves your browser for maximum privacy.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700">
            <CardHeader>
              <Key className="w-12 h-12 text-pink-500 mb-4" />
              <CardTitle>Versatile</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Generate various types of secrets, including random strings, UUIDs, cryptographic hashes, encryption keys, and strong passwords, all tailored for Next.js applications.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

