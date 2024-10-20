import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex h-full justify-center items-center">
      <div className="flex flex-col items-center">
        <Image
          src="/ritzies-final-ko.svg"
          alt="Ritzies BBQ"
          className="dark:invert"
          width={250}
          height={100}
          priority
        />
        <p className="align-center">Contact us at 867.5309</p>
      </div>
    </div>
  );
}