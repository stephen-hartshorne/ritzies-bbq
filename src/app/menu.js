import Image from "next/image";

const menuImages = [
  "food-plate-1.jpg",
  "food-plate-2.jpg",
  "food-plate-3.jpg",
  "grill-meat-1.jpg",
  "meat-1.jpg",
  "food-plate-4.jpg",
];

export default function Menu() {
  return (
    <div className="min-h-screen bg-r-cream flex flex-col items-center px-2 pb-8 animate-fadein">
      <section className="w-full max-w-2xl flex flex-col items-center text-center mt-8 mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-r-green mb-2 drop-shadow-lg transition-colors duration-300">
          Our Menu Changes Daily!
        </h1>
        <h2 className="text-lg sm:text-xl text-r-text font-medium mb-3 transition-colors duration-300">
          We serve what’s fresh, smoked, and delicious that day.
        </h2>
        <p className="text-md sm:text-lg text-r-green mb-6 max-w-xl">
          Check our Instagram and Facebook for today’s offerings and locations!
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {menuImages.map((img, idx) => (
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
        <div className="flex gap-6 mt-2 justify-center">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            className="bg-white/80 rounded-full shadow-md hover:bg-r-green hover:text-r-cream transition-colors duration-300 flex items-center justify-center w-12 h-12">
            <span className="sr-only">Instagram</span>
            <svg className="w-8 h-8"/>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
            className="bg-white/80 rounded-full shadow-md hover:bg-r-green hover:text-r-cream transition-colors duration-300 flex items-center justify-center w-12 h-12">
            <span className="sr-only">Facebook</span>
            <svg className="w-8 h-8"/>
          </a>
        </div>
      </section>
    </div>
  );
}
