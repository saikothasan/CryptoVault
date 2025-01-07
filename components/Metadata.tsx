import { Metadata } from 'next';

interface MetadataProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

export function generateMetadata({
  title = "CryptoVault - Advanced Secret Generator for Next.js",
  description = "Generate secure, random secrets for your Next.js applications with CryptoVault. Features multiple cryptographic functions and an easy-to-use interface.",
  keywords = "Next.js, cryptography, secret generator, web security, CryptoJS",
  ogImage = "/og-image.png"
}: MetadataProps): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

