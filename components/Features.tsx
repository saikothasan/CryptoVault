import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, RefreshCw, Copy, ShieldCheck, Key, Lock } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Zap className="w-8 h-8 text-yellow-500 mb-4" />
              <CardTitle>Multiple Secret Types</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Generate random strings, UUIDs, SHA-256 hashes, AES keys, HMAC keys, and Base64 encoded secrets to suit your specific needs.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Lock className="w-8 h-8 text-green-500 mb-4" />
              <CardTitle>Secure Password Generation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Create strong, unique passwords with customizable length and character sets, perfect for enhancing your application's security.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Key className="w-8 h-8 text-blue-500 mb-4" />
              <CardTitle>Encryption Key Generation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Generate secure encryption keys for AES and HMAC algorithms, ensuring robust data protection in your Next.js applications.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <RefreshCw className="w-8 h-8 text-purple-500 mb-4" />
              <CardTitle>Adjustable Parameters</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Customize the length and complexity of your generated secrets and passwords to meet specific security requirements.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Copy className="w-8 h-8 text-indigo-500 mb-4" />
              <CardTitle>One-Click Copy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Easily copy generated secrets, passwords, and keys to your clipboard with a single click for seamless integration into your projects.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <ShieldCheck className="w-8 h-8 text-red-500 mb-4" />
              <CardTitle>Next.js Optimized</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Tailored for use in Next.js applications, ensuring compatibility and following best practices for secret management in your projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

