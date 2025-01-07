import { NextResponse } from 'next/server';
import CryptoJS from 'crypto-js';

function generateRandomSecret(length: number): string {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|:;<>,.?/~`';
  let secret = '';
  for (let i = 0; i < length; i++) {
    secret += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return secret;
}

export async function POST(request: Request) {
  try {
    const { type, length } = await request.json();
    let secret = '';

    switch (type) {
      case 'random':
        secret = generateRandomSecret(length);
        break;
      case 'uuid':
        secret = CryptoJS.lib.WordArray.random(16).toString();
        break;
      case 'hash':
        const timestamp = new Date().getTime().toString();
        secret = CryptoJS.SHA256(timestamp).toString();
        break;
      case 'aes':
        secret = CryptoJS.lib.WordArray.random(length / 2).toString();
        break;
      case 'hmac':
        secret = CryptoJS.lib.WordArray.random(length / 2).toString();
        break;
      case 'base64':
        secret = CryptoJS.enc.Base64.stringify(CryptoJS.lib.WordArray.random(length));
        break;
      default:
        throw new Error('Invalid secret type');
    }

    return NextResponse.json({ secret });
  } catch (error) {
    console.error('Error generating secret:', error);
    return NextResponse.json({ error: 'Failed to generate secret' }, { status: 500 });
  }
}

