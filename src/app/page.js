import Image from "next/image";
import { FacebookIcon } from "@/components/facebook-icon";
import { InstagramIcon } from "@/components/instagram-icon";

export default function Page() {
  // Images from the revision folder
  // Use the most likely trailer/food truck image as hero (adjust if needed)
  const heroImg = "/images/revision/food-plate-7.jpg";
  const galleryImages = [
    "food-plate-1.jpg",
    "food-plate-2.jpg",
    "food-plate-3.jpg",
    "food-plate-4.jpg",
    "food-plate-5.jpg",
    "food-plate-6.jpg",
    "food-plate-8.jpg",
    "food-plate-9.jpg",
    "food-plate-10.jpg",
    "food-plate-11.jpg",
    "food-plate-12.jpg",
    "grill-meat-1.jpg",
    "grill-meat-2.jpg",
    "meat-1.jpg",
    "meat-2.jpg",
    "meat-3.jpg",
    "meat-4.jpg",
    "meat-5-logo.jpg",
    "meat-6.jpg",
    "meat-7.jpg",
    // Add or reorder as desired
  ];

  return (
    <div className="min-h-screen bg-r-cream flex flex-col items-center px-2 pb-8 animate-fadein">
      {/* Hero Section */}
      <section id="hero" className="w-full max-w-2xl flex flex-col items-center text-center mt-8 mb-10">
        <div className="overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105">
          <Image
            src={heroImg}
            alt="Ritzie's BBQ Food Truck"
            width={800}
            height={450}
            className="object-cover w-full h-64 sm:h-80 md:h-96"
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-r-green mt-6 mb-2 drop-shadow-lg transition-colors duration-300">
          Ritzie's Barbeque
        </h1>
        <h2 className="text-lg sm:text-xl text-r-text font-medium mb-3 transition-colors duration-300">
          Authentic Tennessee BBQ — Served Fresh from Our Food Truck
        </h2>
        <p className="text-md sm:text-lg text-r-green mb-4">
          Find us rolling through Tennessee, serving up the best BBQ from our custom trailer!
        </p>
        {/* Social Links */}
        <div className="flex gap-3 mt-2">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            className="bg-white/80 border border-r-green/20 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center w-12 h-12">
            <InstagramIcon className="w-8 h-8" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
            className="bg-white/80 border border-r-green/20 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center w-12 h-12">
            <FacebookIcon className="w-8 h-8" />
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="w-full max-w-2xl flex flex-col items-center text-center my-12 px-2 py-10 bg-[#e0d6bc] border border-r-green/30 rounded-2xl shadow-lg animate-fadein">
        <div className="overflow-hidden rounded-2xl shadow-lg mb-6 w-full max-w-md mx-auto">
          {/* Replace with actual image filename of your friend and his wife */}
          <Image
            src="/images/revision/about-us-couple.jfif"
            alt="Owners of Ritzie's BBQ"
            width={500}
            height={350}
            className="object-cover w-full h-64 sm:h-80 md:h-96"
            priority
          />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-r-green mb-2 drop-shadow-lg transition-colors duration-300">
          Meet the Owners
        </h2>
        <h3 className="text-lg sm:text-xl text-r-text font-medium mb-3 transition-colors duration-300">
          The heart behind Ritzie's Barbeque
        </h3>
        <p className="text-md sm:text-lg text-r-green mb-2 max-w-xl">
        Hi! We are Travis and Paige Ritzie and we have been lifelong food enthusiasts. Our passion for barbecue started during the pandemic when we utilized outdoor cooking to connect with family and friends.

Things got pretty serious two years later when Travis found a Texas bbq spot with openings, one that just so happened to be world-renowned. Leroy and Lewis adopted both of us and shaped our customer service and live-fire cooking skills and allowed us to move to Memphis and bridge the barbecue gap. Ritzies Barbecue aims to serve the best of both styles so you don’t have to choose. Follow along as we start our journey with barbecue at different 901 spots!
        </p>
      </section>

      {/* Menu Section */}
      <section id="menu" className="w-full max-w-4xl flex flex-col items-center text-center my-12 px-2 py-10 bg-[#e0d6bc] border border-r-green/30 rounded-2xl shadow-lg animate-fadein">
        <h2 className="text-3xl sm:text-4xl font-bold text-r-green mb-2 drop-shadow-lg transition-colors duration-300">
          Our Menu Changes Daily!
        </h2>
        <h3 className="text-lg sm:text-xl text-r-text font-medium mb-3 transition-colors duration-300">
          We serve what’s fresh, smoked, and delicious that day.
        </h3>
        <p className="text-md sm:text-lg text-r-green mb-6 max-w-xl">
          Check our Instagram and Facebook for today’s offerings and locations!
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {galleryImages.slice(0, 6).map((img, idx) => (
            <div
              key={img}
              className="overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={`/images/revision/${img}`}
                alt={`Menu Gallery ${idx + 1}`}
                width={300}
                height={200}
                className="object-cover w-full h-32 sm:h-40 md:h-48"
              />
            </div>
          ))}
        </div>
        <div className="flex gap-3 mt-2 justify-center">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            className="bg-white/80 border border-r-green/20 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center w-12 h-12">
            <InstagramIcon className="w-8 h-8" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
            className="bg-white/80 border border-r-green/20 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center w-12 h-12">
            <FacebookIcon className="w-8 h-8" />
          </a>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="w-full max-w-4xl my-12 animate-fadein">
        <h3 className="text-2xl text-r-green font-semibold mb-4 text-center">Gallery</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {galleryImages.map((img, idx) => (
            <div
              key={img}
              className="overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={`/images/revision/${img}`}
                alt={`BBQ Gallery ${idx + 1}`}
                width={400}
                height={300}
                className="object-cover w-full h-36 sm:h-44 md:h-52"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
