import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: 'CryptoVault API Documentation',
  description: 'Documentation for the CryptoVault public API for generating secure secrets, passwords, and encryption keys.',
};

export default function ApiDocs() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">CryptoVault API Documentation</h1>
      
      <Tabs defaultValue="endpoint" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="endpoint">Endpoint</TabsTrigger>
          <TabsTrigger value="request">Request</TabsTrigger>
          <TabsTrigger value="response">Response</TabsTrigger>
        </TabsList>
        <TabsContent value="endpoint">
          <Card>
            <CardHeader>
              <CardTitle>API Endpoint</CardTitle>
            </CardHeader>
            <CardContent>
              <code className="bg-gray-100 dark:bg-gray-800 p-2 rounded block overflow-x-auto">
                POST https://your-domain.com/api/generate-secret
              </code>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="request">
          <Card>
            <CardHeader>
              <CardTitle>Request Body</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
{`{
  "type": string,  // "random", "uuid", "hash", "aes", "hmac", or "base64"
  "length": number // Required for "random", "aes", "hmac", and "base64"
}`}
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="response">
          <Card>
            <CardHeader>
              <CardTitle>Response</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
{`{
  "secret": string
}`}
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Example Usage</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
{`fetch('https://your-domain.com/api/generate-secret', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    type: 'random',
    length: 32
  }),
})
  .then(response => response.json())
  .then(data => console.log(data.secret))
  .catch(error => console.error('Error:', error));`}
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Rate Limiting</CardTitle>
        </CardHeader>
        <CardContent>
          <p>The API is rate-limited to 100 requests per hour per IP address. If you exceed this limit, you'll receive a 429 Too Many Requests response.</p>
        </CardContent>
      </Card>
    </div>
  );
}

