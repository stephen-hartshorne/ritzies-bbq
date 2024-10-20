import Head from "next/head";
import Image from "next/image";
import Header from '../components/header';

export default function Page() {
  return (
    <div className="flex h-full justify-center items-center">
      <div className="flex flex-col items-center">

        <Image
          src="/ritzies-final-2.svg"
          color="r-green"
          alt="Ritzies BBQ"
          className="r-green"
          width={250}
          height={100}
          priority
        />
      </div>
    </div>
  );
}
