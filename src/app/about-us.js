import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-r-cream flex flex-col items-center px-2 pb-8 animate-fadein">
      <section className="w-full max-w-2xl flex flex-col items-center text-center mt-8 mb-10">
        <div className="overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105 mb-6">
          {/* Replace with the actual image filename of your friend and his wife */}
          <Image
            src="/jfimages/revision/about-us-couple.jfif"
            alt="Owners of Ritzie's BBQ"
            width={500}
            height={350}
            className="object-cover w-full h-64 sm:h-80 md:h-96"
            priority
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-r-green mb-2 drop-shadow-lg transition-colors duration-300">
          Meet the Owners
        </h1>
        <h2 className="text-lg sm:text-xl text-r-text font-medium mb-3 transition-colors duration-300">
          The heart behind Ritzie's Barbeque
        </h2>
        <p className="text-md sm:text-lg text-r-green mb-6 max-w-xl">
        Hi! We are Travis and Paige Ritzie and we have been lifelong food enthusiasts. Our passion for barbecue started during the pandemic when we utilized outdoor cooking to connect with family and friends.

Things got pretty serious two years later when Travis found a Texas bbq spot with openings, one that just so happened to be world-renowned. Leroy and Lewis adopted both of us and shaped our customer service and live-fire cooking skills and allowed us to move to Memphis and bridge the barbecue gap. Ritzies Barbecue aims to serve the best of both styles so you don’t have to choose. Follow along as we start our journey with barbecue at different 901 spots!
        </p>
        <div className="flex gap-6 mt-2">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            className="bg-white/80 rounded-full shadow-md hover:bg-r-green hover:text-r-cream transition-colors duration-300 flex items-center justify-center w-12 h-12">
            {/* InstagramIcon imported globally in layout */}
            <span className="sr-only">Instagram</span>
            <svg className="w-8 h-8"/>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
            className="bg-white/80 rounded-full shadow-md hover:bg-r-green hover:text-r-cream transition-colors duration-300 flex items-center justify-center w-12 h-12">
            {/* FacebookIcon imported globally in layout */}
            <span className="sr-only">Facebook</span>
            <svg className="w-8 h-8"/>
          </a>
        </div>
      </section>
    </div>
  );
}
