import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="flex h-full justify-center items-center">
      <div className="flex flex-col items-center w-1/2 indent-4">
        <h1 className="text-r-green text-4xl mb-9">About Us</h1>
        <Image
          src="/images/travis-paige-1.jfif"
          alt="travis-paige"
          className="pb-6"
          width={500}
          height={400}
          priority
        />
        <p className="text-r-text text-xl">
          Hi! We are Travis and Paige Ritzie and we have been lifelong food enthusiasts.
          Our passion for barbecue started during the pandemic when we utilized outdoor cooking to connect with family and friends.
        </p>
        <p className="mt-3 text-r-text text-xl">
          Things got pretty serious two years later when Travis found a Texas bbq spot with openings, one that just so happened to be world-renowned.
          Leroy and Lewis adopted both of us and shaped our customer service and live-fire cooking skills and allowed us to move to Memphis and bridge the barbecue gap.
          Ritzies Barbecue aims to serve the best of both styles so you don’t have to choose.
          Follow along as we start our journey with barbecue at different 901 spots!
        </p>
      </div>
    </div>
  );
}