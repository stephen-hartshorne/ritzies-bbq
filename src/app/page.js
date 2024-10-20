import Image from "next/image";
import { FacebookIcon } from "@/components/facebook-icon";
import { InstagramIcon } from "@/components/instagram-icon";

export default function Page() {
  return (
    <div className="flex h-full justify-center items-center">
      <div className="flex flex-col items-center">

        <h1 className="text-r-green mb-9 text-4xl">
          Welcome to
        </h1>
        <Image
          src="/ritzies-final-2.svg"
          color="r-green"
          alt="Ritzies BBQ"
          className="r-green"
          width={500}
          height={500}
          priority
        />

        <div className="flex flex-col items-center">
          <span className="text-r-green">Check us out on our socials:</span>
          <div className="flex mt-6">
            <InstagramIcon />
            <FacebookIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
