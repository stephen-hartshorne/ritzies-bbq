import Head from "next/head";
import Image from "next/image";
import Header from '../components/header';

export default function Page() {
  return (
    <div className="flex h-full justify-center items-center">
      <div class="flex flex-col items-center">
        <Image
          src="/ritzies-final-2.svg"
          alt="Ritzies BBQ"
          className="dark:invert"
          width={250}
          height={100}
          priority
        />
        <p class="align-center">Welcome Home</p>
      </div>
      
    </div>
  );
}
