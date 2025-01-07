import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { MessageCircle } from 'lucide-react';

export default function TelegramJoin() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center mb-2 sm:mb-0">
          <MessageCircle size={20} className="mr-2" />
          <span className="text-sm font-medium">Join our Telegram community</span>
        </div>
        <Link href="https://t.me/cryptovault" target="_blank" rel="noopener noreferrer">
          <Button variant="secondary" size="sm" className="w-full sm:w-auto">
            Join Now
          </Button>
        </Link>
      </div>
    </div>
  );
}

