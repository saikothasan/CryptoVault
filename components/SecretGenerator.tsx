'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { toast } from '@/components/ui/use-toast';
import { Copy, RefreshCw, Lock, Eye, EyeOff } from 'lucide-react';
import { PasswordStrength } from './PasswordStrength';

export default function SecretGenerator() {
  const [secret, setSecret] = useState('');
  const [loading, setLoading] = useState(false);
  const [secretType, setSecretType] = useState('random');
  const [secretLength, setSecretLength] = useState(32);
  const [showSecret, setShowSecret] = useState(false);

  const generateSecret = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/generate-secret', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: secretType, length: secretLength }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate secret');
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      setSecret(data.secret);
      toast({
        title: "Secret Generated",
        description: "Your new secret is ready to use.",
      });
    } catch (error) {
      console.error('Failed to generate secret:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to generate secret. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(secret).then(() => {
      toast({
        title: "Copied!",
        description: "Secret copied to clipboard.",
      });
    });
  };

  const toggleSecretVisibility = () => {
    setShowSecret(!showSecret);
  };

  return (
    <Card className="w-full max-w-2xl bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 shadow-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Generate Your Secret
        </CardTitle>
        <CardDescription>
          Choose your secret type and options, then generate a secure key for your Next.js app.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Secret Type</label>
            <Select onValueChange={setSecretType} defaultValue={secretType}>
              <SelectTrigger>
                <SelectValue placeholder="Select secret type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="random">Random</SelectItem>
                <SelectItem value="uuid">UUID</SelectItem>
                <SelectItem value="hash">Hash (SHA-256)</SelectItem>
                <SelectItem value="aes">AES Encryption Key</SelectItem>
                <SelectItem value="hmac">HMAC Key</SelectItem>
                <SelectItem value="base64">Base64 Encoded</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {(secretType === 'random' || secretType === 'aes' || secretType === 'hmac' || secretType === 'base64') && (
            <div className="space-y-2">
              <label className="text-sm font-medium">Secret Length: {secretLength}</label>
              <Slider
                min={16}
                max={64}
                step={8}
                value={[secretLength]}
                onValueChange={(value) => setSecretLength(value[0])}
              />
            </div>
          )}
          
          <Button 
            onClick={generateSecret} 
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white"
          >
            {loading ? (
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Lock className="mr-2 h-4 w-4" />
            )}
            {loading ? 'Generating...' : 'Generate Secret'}
          </Button>
          
          {secret && (
            <div className="space-y-2">
              <div className="relative">
                <Input 
                  type={showSecret ? "text" : "password"}
                  value={secret} 
                  readOnly 
                  className="font-mono text-sm bg-white dark:bg-gray-800 border-2 border-indigo-300 dark:border-indigo-700 pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full"
                  onClick={toggleSecretVisibility}
                >
                  {showSecret ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              <PasswordStrength password={secret} />
              <Button onClick={copyToClipboard} variant="outline" className="w-full">
                <Copy className="mr-2 h-4 w-4" />
                Copy to Clipboard
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

