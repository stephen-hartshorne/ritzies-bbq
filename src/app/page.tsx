'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

import ScrollFadeIn from './components/ScrollFadeIn';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        !event.target ||
        !(event.target instanceof HTMLElement)
      ) return;
      if (
        !event?.target?.closest('#mobile-nav-toggle') &&
        !event?.target?.closest('#mobile-nav-menu')
      ) {
        setMobileMenuOpen(false);
      }
    };

    const timeout = setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
    }, 50);

    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = '';
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openLightbox = (index: number) => {
    if (!isMobile) {
      setLightboxIndex(index);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => {
      if (prev === null) return 0;
      return prev === 0 ? galleryImages.length - 1 : prev - 1;
    });
  };

  const nextImage = () => {
    setLightboxIndex((prev) => {
      if (prev === null) return 0;
      return prev === galleryImages.length - 1 ? 0 : prev + 1;
    });
  };

  const galleryImages = [
    // Smoker / Cooking Process
    { src: '/bbq-3.jpg', alt: 'Brisket in foil' },
    { src: '/bbq-2.jpg', alt: 'Ribs on Smoker' },
    // { src: '/grill-meat-1.jpg', alt: 'Grilled Meat 1' },
    { src: '/grill-meat-2.jpg', alt: 'Grilled Meat 2' },
    // Plates and Food
    { src: '/food-plate-1.jpg', alt: 'Food Plate 1' },
    // { src: '/food-plate-2.jpg', alt: 'Food Plate 2' },
    { src: '/food-plate-3.jpg', alt: 'Food Plate 3' },
    { src: '/food-plate-4.jpg', alt: 'Food Plate 4' },
    { src: '/food-plate-5.jpg', alt: 'Food Plate 5' },
    // { src: '/food-plate-6.jpg', alt: 'Food Plate 6' },
    // { src: '/food-plate-7.jpg', alt: 'Food Plate 7' },
    { src: '/food-plate-8.jpg', alt: 'Food Plate 8' },
    { src: '/food-plate-9.jpg', alt: 'Food Plate 9' },
    // { src: '/food-plate-10.jpg', alt: 'Food Plate 10' },
    { src: '/food-plate-11.jpg', alt: 'Food Plate 11' },
    { src: '/food-plate-12.jpg', alt: 'Food Plate 12' },

    // Meat Closeups
    { src: '/meat-1.jpg', alt: 'Brisket Closeup 1' },
    // { src: '/meat-2.jpg', alt: 'Brisket Closeup 2' },
    // { src: '/meat-4.jpg', alt: 'Brisket Closeup 3' },
    // { src: '/meat-6.jpg', alt: 'Brisket Closeup 4' },
    // { src: '/meat-7.jpg', alt: 'Brisket Closeup 5' },

    // Smoker / Cooking Process
    // { src: '/trailer-2.jpg', alt: 'Smoker Trailer' },
    // { src: '/trailer-1.jpg', alt: 'Smoker in Action' }
  ];

  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollMt = isMobile ? 'scroll-mt-80' : 'scroll-mt-34'

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#e4dbc8] border-b border-[#43453d] shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a onClick={(e) => handleMenuClick(e, "#home")} className="cursor-pointer">
              <Image src="/ritzies-final.svg" alt="Ritzies BBQ Logo" width={120} height={45} />
            </a>
          </div>
          <nav className="space-x-6 text-base font-medium hidden md:block">
            <a href="#menu" onClick={(e) => handleMenuClick(e, '#menu')} className="hover:text-black">Menu</a>
            <a href="#about" onClick={(e) => handleMenuClick(e, '#about')} className="hover:text-black">About</a>
            <a href="#gallery" onClick={(e) => handleMenuClick(e, '#gallery')} className="hover:text-black">Gallery</a>
            <a href="#social" onClick={(e) => handleMenuClick(e, '#social')} className="hover:text-black">Social</a>
          </nav>
          <div className="md:hidden">
            <button
              id="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#43453d] focus:outline-none transition-transform duration-300 transform hover:scale-110 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <HiOutlineX className="text-3xl" /> : <HiOutlineMenu className="text-3xl" />}
            </button>
          </div>
        </div >

        <div
          key={mobileMenuOpen ? 'open' : 'closed'}
          id="mobile-nav-menu"
          className={`md:hidden px-4 pb-4 flex flex-col gap-2 transform origin-top ${mobileMenuOpen ? 'animate-expand-down' : 'hidden'
            }`}
        >
          <a href="#menu" onClick={(e) => handleMenuClick(e, '#menu')} className="py-2 text-base text-[#43453d] hover:text-black">Menu</a>
          <a href="#about" onClick={(e) => handleMenuClick(e, '#about')} className="py-2 text-base text-[#43453d] hover:text-black">About</a>
          <a href="#gallery" onClick={(e) => handleMenuClick(e, '#gallery')} className="py-2 text-base text-[#43453d] hover:text-black">Gallery</a>
          <a href="#social" onClick={(e) => handleMenuClick(e, '#social')} className="py-2 text-base text-[#43453d] hover:text-black">Social</a>
        </div>

      </header >

      <main className="bg-[#e4dbc8] text-[#43453d] min-h-screen font-[theme(font.body)]  animate-fade-in">

        {/* HERO SECTION */}
        <section id="home" className="relative h-screen w-full overflow-hidden animate-fade-in-down">
          <div className="absolute inset-0 z-0">
            <Image
              src="/trailer-1.jpg"
              alt="Smoker in Action"
              fill
              priority
              className="object-cover w-full h-full mix-blend-multiply opacity-60"
            />
          </div>
          <div className="absolute inset-0 z-10 bg-black/40 flex flex-col items-center justify-center gap-4">
            <h1 className="text-white text-5xl md:text-7xl font-bold text-center font-[theme(font.heading)] drop-shadow-[0_3px_6px_rgba(0,0,0,0.75)]">Ritzies Barbecue</h1>
            <div className="text-white text-lg md:text-2xl text-center font-[theme(font.body)] mt-2 space-y-1">
              <p className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Bridging the barbecue gap</p>
              <p className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Texas meets Memphis</p>
            </div>
          </div>
        </section>

        {/* MENU SECTION */}
        <ScrollFadeIn>
          <section id="menu" className={`${scrollMt} bg-[#43453d] text-[#e4dbc8] py-16 px-4 animate-fade-in-up`}>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4 font-[theme(font.heading)]">Menu</h2>
              <p className="text-lg mb-6">Check our <a onClick={(e) => handleMenuClick(e, '#social')} className="cursor-pointer underline text-white">Instagram</a> and <a onClick={(e) => handleMenuClick(e, '#social')} className="cursor-pointer underline text-white">Facebook</a> for today’s offerings and locations!</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Image src="/food-plate-5.jpg" alt="BBQ Plate Option 1" width={600} height={400} className="rounded-xl shadow-lg w-full object-cover" />
                <Image src="/food-plate-6.jpg" alt="BBQ Plate Option 2" width={600} height={400} className="rounded-xl shadow-lg w-full object-cover" />
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* ABOUT SECTION */}
        <ScrollFadeIn>
          <section id="about" className={`${scrollMt} bg-[#e4dbc8] max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-10 items-center`}>
            <div className="space-y-6">
              <h2 className="font-[theme(font.heading)] text-4xl font-bold">About Us</h2>
              <p className="text-lg leading-relaxed font-[theme(font.body)] ">
                Hi! We are Travis and Paige Ritzie and we have been lifelong food enthusiasts.
                Our passion for barbecue started during the pandemic when we utilized outdoor cooking to connect with family and friends.
              </p>

              <p className="text-lg leading-relaxed font-[theme(font.body)] ">
                Things got pretty serious two years later when Travis found a Texas bbq spot with openings, one that just so happened to be world-renowned.
                Leroy and Lewis adopted both of us and shaped our customer service and live-fire cooking skills and allowed us to move to Memphis and bridge the barbecue gap.
                Ritzies Barbecue aims to serve the best of both styles so you don’t have to choose.
                Follow along as we start our journey with barbecue at different 901 spots!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Image src="/about-us-couple.jfif" alt="Owners Smiling" width={500} height={350} className="rounded-xl shadow-lg object-cover" />
              <Image src="/3amigos.jpg" alt="The 3 Amigos" width={500} height={350} className="rounded-xl shadow-lg object-cover" />
            </div>
          </section>
        </ScrollFadeIn>

        {/* GALLERY SECTION */}
        <ScrollFadeIn>
          <section id="gallery" className={`${scrollMt} bg-[#f7f5f0] max-w-6xl mx-auto py-16 px-4`}>
            <h2 className="font-[theme(font.heading)] text-4xl font-bold text-center mb-8 transition-opacity duration-700 animate-fade-in">Gallery</h2>
            <div className="hidden md:grid grid-cols-3 gap-6">
              {galleryImages.map((img, index) => (
                <div key={index} className="cursor-pointer" onClick={() => openLightbox(index)}>
                  <Image src={img.src} alt={img.alt} width={400} height={300} className="rounded-xl w-full h-auto object-cover" />
                </div>
              ))}
            </div>
            <div className="md:hidden overflow-x-auto flex gap-4 pb-2">
              {galleryImages.map((img, index) => (
                <div key={index} className="flex-shrink-0 w-64 cursor-default">
                  <Image src={img.src} alt={img.alt} width={256} height={192} className="rounded-xl w-full h-auto object-cover" />
                </div>
              ))}
            </div>
          </section>
        </ScrollFadeIn>

        {/* SOCIAL SECTION */}
        <section id="social" className="bg-[#43453d] text-[#e4dbc8] py-16 px-4 text-center">
          <h2 className="font-[theme(font.heading)] text-4xl font-bold mb-4">Follow Us</h2>
          <div className="flex justify-center space-x-10 text-4xl">
            <a href="https://www.facebook.com/profile.php?id=61565572948008" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/ritziesbarbecue/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </section>

        {
          lightboxIndex !== null && !isMobile && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
              <button onClick={closeLightbox} className="cursor-pointer absolute top-4 right-4 text-white text-3xl">&times;</button>
              <button onClick={prevImage} className="cursor-pointer absolute left-4 text-white text-4xl z-50">&#10094;</button>
              <div className="relative w-full max-w-6xl max-h-[90vh] px-4">
                <img
                  src={galleryImages[lightboxIndex].src}
                  alt={galleryImages[lightboxIndex].alt}
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                />
              </div>
              <button onClick={nextImage} className="cursor-pointer absolute right-4 text-white text-4xl">&#10095;</button>
            </div>
          )
        }

      </main >
    </>
  );
}
