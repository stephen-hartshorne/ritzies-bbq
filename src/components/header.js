import Image from "next/image";
import Link from "next/link";
import { FacebookIcon } from "./facebook-icon";
import { InstagramIcon } from "./instagram-icon";

export default function Header() {
  return (
    <nav className="flex flex-row items-center justify-between pr-6 pl-6 bg-r-green">
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
      <div className="flex">
        <Link className="mr-3" href="https://www.instagram.com/ritziesbarbecue/profilecard/?igsh=emN0MnVsbTE2ejZh">
          <InstagramIcon />
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=61565572948008&mibextid=LQQJ4d">
          <FacebookIcon />
        </Link>
      </div>
    </nav>
  );
}