import Image from "next/image";
import Link from "next/link";
import { FacebookIcon } from "./facebook-icon";
import { InstagramIcon } from "./instagram-icon";

export default function Header() {
  return (
    <nav className="w-full bg-r-green shadow-md rounded-b-xl px-4 py-2 flex items-center justify-between">
      {/* Logo left */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/ritzies-final-2.svg"
          alt="Ritzies BBQ"
          width={48}
          height={48}
          className="filter invert brightness-200"
          priority
        />
        <span className="text-r-cream text-xl font-bold tracking-wide hidden sm:inline">Ritzie's BBQ</span>
      </Link>

      {/* Social icons right */}
      <div className="flex gap-3">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
          className="bg-gray-50 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center w-10 h-10">
          <InstagramIcon className="w-6 h-6" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
          className="bg-gray-50 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center w-10 h-10">
          <FacebookIcon className="w-6 h-6" />
        </a>
      </div>
    </nav>
  );
}