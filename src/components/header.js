import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex flex-row items-center justify-between pr-6 pl-6">
      <Link href="/">
        <Image
          src="/ritzies-final.svg"
          alt="Ritzies BBQ"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </Link>
      <Link href="/about-us">About Us</Link>
      <Link href="/menu">Menu</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}