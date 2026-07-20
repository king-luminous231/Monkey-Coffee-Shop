'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const MENU_ITEMS = [
  {
    id: 1,
    name: 'Classic Espresso',
    category: 'Coffee',
    desc: 'Rich, bold, and perfectly balanced single-origin espresso.',
    img: '/image/Classic espresso.png',
  },
  {
    id: 2,
    name: 'Signature Latte',
    category: 'Coffee',
    desc: 'Smooth espresso with velvety steamed milk and latte art.',
    img: '/image/signature latte.png',
  },
  {
    id: 3,
    name: 'Artisan Cappuccino',
    category: 'Coffee',
    desc: 'Perfect harmony of espresso, steamed milk, and foam.',
    img: '/image/artisan cappuccino.png',
  },
  {
    id: 4,
    name: 'Cold Brew Delight',
    category: 'Signature',
    desc: 'Smooth, naturally sweet cold-brewed for 24 hours.',
    img: '/image/cold brew delight.png',
  },
  {
    id: 5,
    name: 'Vanilla Bean Latte',
    category: 'Signature',
    desc: 'House-made vanilla bean syrup with premium espresso.',
    img: '/image/vanilla bean latte.png',
  },
  {
    id: 6,
    name: 'Mocha Indulgence',
    category: 'Non Coffee',
    desc: 'Rich chocolate with steamed milk and whipped cream.',
    img: '/image/mocha indulgence.png',
  },
]

const FEATURES = [
  {
    id: 1,
    icon: 'fa-mug-hot',
    title: 'Crafted Beverages',
    desc: 'Every drink is meticulously crafted by our expert baristas using premium beans',
  },
  {
    id: 2,
    icon: 'fa-wifi',
    title: 'Cozy Workspace',
    desc: 'Fast WiFi, comfortable seating, and the perfect ambiance for productivity',
  },
  {
    id: 3,
    icon: 'fa-heart',
    title: 'All Day Dining',
    desc: 'From breakfast pastries to evening treats, we\'ve got you covered',
  },
  {
    id: 4,
    icon: 'fa-clock',
    title: 'Open Late',
    desc: 'Extended hours to accommodate your schedule and lifestyle',
  },
]

const GALLERY_ITEMS = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80',
    alt: 'Coffee Shop Interior',
    size: 'large',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=400&q=80',
    alt: 'Coffee Preparation',
    size: 'small',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=400&q=80',
    alt: 'Coffee Window',
    size: 'small',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=400&q=80',
    alt: 'Seating Area',
    size: 'small',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80',
    alt: 'Barista Counter',
    size: 'small',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=400&q=80',
    alt: 'Coffee Making',
    size: 'small',
  },
]

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null)

  useEffect(() => {
    // AOS needs to wait for the deferred script to load
    const initAOS = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const AOS = (window as any).AOS
      if (AOS) {
        AOS.init({ duration: 800, once: true, offset: 80, easing: 'ease-out-cubic' })
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((window as any).AOS) {
      initAOS()
    } else {
      window.addEventListener('load', initAOS)
    }

    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('load', initAOS)
    }
  }, [])

  return (
    <>
      {/* ── NAVBAR ────────────────────────── */}
      <header className="fixed inset-x-0 top-0 z-50 bg-brand-light shadow-sm">
        <div className="flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-20" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
          {/* Logo */}
          <a href="#">
            <Image
              src="/image/logo coffee.png"
              alt="Monkey Coffee Logo"
              width={60}
              height={30}
              className="object-contain sm:w-[70px] sm:h-[35px]"
              unoptimized
            />
          </a>
          {/* Button kanan dengan gap dari ujung */}
          <a
            href="#visit"
            className="px-3 py-1.5 sm:px-4 rounded-full font-semibold text-[10px] sm:text-xs transition-all duration-300 bg-brand-dark text-white hover:bg-brand-brown"
          >
            Visit Us
          </a>
        </div>
      </header>

      {/* ── HERO ────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 overflow-hidden">
        <Image
          src="/image/foto restoran.jpg"
          alt="Coffee Shop Hero"
          fill
          className="object-cover -z-10"
          unoptimized
          priority
        />
        <div className="absolute inset-0 bg-black/50 -z-10"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-8 sm:gap-12">
          <div className="space-y-4 sm:space-y-6">
            <h1
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight"
              data-aos="fade-up"
            >
              Find Your Coffee, Bar &amp; <br /> Dining Escape
            </h1>
            <p
              className="text-sm sm:text-base md:text-lg text-white/90"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              A cozy space to sip, work, and connect.
            </p>
          </div>
          <a
            href="#menu"
            className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-brand-dark text-xs sm:text-sm font-semibold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            CHECK OUR MENUS
          </a>
        </div>
      </section>

      {/* ── LOVED BY — bg #ffffff, gap 48px dari hero ── */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 text-center" style={{ backgroundColor: '#FFFFFF', marginTop: '0px' }}>
        <div className="max-w-4xl mx-auto" style={{ paddingTop: '48px', paddingBottom: '0px' }}>
          <div className="flex justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="fa-solid fa-star text-red-500 text-sm sm:text-base"></i>
            ))}
          </div>
          <h2 className="font-serif text-lg sm:text-xl md:text-2xl text-brand-dark mb-1">
            Loved by Coffee Lovers &amp; Creatives
          </h2>
          <p className="text-brand-gray text-xs sm:text-sm">
            Top-rated hangout spot in the city
          </p>
        </div>
      </section>

      {/* ── MENU ────────────────────────── */}
      <section id="menu" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <span className="text-red-500 font-semibold text-xs tracking-widest uppercase">
              Our Craft
            </span>
            <h2 className="font-serif text-2xl sm:text-2xl md:text-3xl text-brand-dark mt-2 mb-3">
              Highlighted Signature
            </h2>
            <p className="text-brand-gray text-xs sm:text-sm max-w-2xl mx-auto">
              From classic espresso to signature blends, each cup tells a story
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {MENU_ITEMS.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onMouseEnter={() => setHoveredMenu(item.id)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 sm:mb-6 h-64 sm:h-72 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
                </div>
                <span className="text-brand-accent text-xs font-bold tracking-widest uppercase">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-brand-dark mt-2 mb-2 sm:mb-3 group-hover:text-brand-accent transition-colors">
                  {item.name}
                </h3>
                <p className="text-brand-gray text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12" data-aos="zoom-in">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-brand-dark text-white text-xs sm:text-sm font-semibold rounded-full hover:bg-brand-brown transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Explore Full Menu
            </a>
          </div>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────── */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <span className="text-brand-accent font-semibold text-xs sm:text-sm tracking-widest uppercase">
              What We Serve
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-dark mt-2">
              More Than Coffee
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {FEATURES.map((feature, index) => (
              <div
                key={feature.id}
                className="group text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  {feature.id === 1 && (
                    <div className="relative">
                      <i className="fa-solid fa-mug-hot text-2xl sm:text-3xl text-brand-accent"></i>
                      <i className="fa-solid fa-wind text-xs text-brand-accent/50 absolute -top-2 -right-2"></i>
                    </div>
                  )}
                  {feature.id === 2 && (
                    <i className="fa-solid fa-wifi text-2xl sm:text-3xl text-brand-accent"></i>
                  )}
                  {feature.id === 3 && (
                    <i className="fa-solid fa-heart text-2xl sm:text-3xl text-brand-accent"></i>
                  )}
                  {feature.id === 4 && (
                    <i className="fa-regular fa-clock text-2xl sm:text-3xl text-brand-accent"></i>
                  )}
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-brand-dark mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-brand-gray text-xs sm:text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ────────────────────────── */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-16" data-aos="fade-up">
            <span className="text-red-500 font-semibold text-xs sm:text-sm tracking-widest uppercase">
              Ambience
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-dark mt-2 mb-3 sm:mb-4">
              Where Moments Happen
            </h2>
            <p className="text-brand-gray text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed">
              A space designed for those who appreciate the finer details. From the natural light that fills our space to the carefully curated seating arrangements, every element is crafted to create an atmosphere of comfort and inspiration.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[250px]">
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300" data-aos="zoom-in" data-aos-delay="0">
              <Image
                src="/image/Screenshot 2026-07-19 001647.png"
                alt="Gallery 1"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
            </div>
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300" data-aos="zoom-in" data-aos-delay="100">
              <Image
                src="/image/Screenshot 2026-07-19 001705.png"
                alt="Gallery 2"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
            </div>
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300" data-aos="zoom-in" data-aos-delay="200">
              <Image
                src="/image/Screenshot 2026-07-19 001720.png"
                alt="Gallery 3"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
            </div>
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300" data-aos="zoom-in" data-aos-delay="300">
              <Image
                src="/image/Screenshot 2026-07-19 001742.png"
                alt="Gallery 4"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
            </div>
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300" data-aos="zoom-in" data-aos-delay="400">
              <Image
                src="/image/Screenshot 2026-07-19 001759.png"
                alt="Gallery 5"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
            </div>
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300" data-aos="zoom-in" data-aos-delay="500">
              <Image
                src="/image/Screenshot 2026-07-19 001816.png"
                alt="Gallery 6"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────── */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-brand-light">
        <div className="max-w-3xl mx-auto text-center">
          <span
            className="text-brand-accent font-semibold text-xs tracking-widest uppercase"
            data-aos="fade-up"
          >
            About Us
          </span>
          <h2
            className="font-serif text-xl sm:text-2xl md:text-3xl text-brand-dark mt-3 mb-4 sm:mb-5 leading-snug"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            A place to connect, relax, and create moments.
          </h2>
          <p
            className="text-brand-gray text-xs leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            At Monkey Coffee, we believe every cup is an invitation to slow down and savor
            life's simple pleasures. Whether you're meeting a friend, working on your next
            big idea, or simply enjoying a quiet moment alone, our doors are open to those
            who appreciate the art of a well-crafted brew and the warmth of genuine community.
          </p>
        </div>
      </section>

      {/* ── VISIT ────────────────────────── */}
      <section id="visit" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Button Visit Us merah di atas heading */}
          <div className="mb-3 sm:mb-4" data-aos="fade-up">
            <span className="text-red-500 font-semibold text-xs sm:text-sm tracking-widest uppercase">
              Visit Us
            </span>
          </div>

          <div className="mb-8 sm:mb-10" data-aos="fade-up" data-aos-delay="50">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-dark">
              Come say hello!
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start">

            {/* Info — center, font lebih kecil, dekat ke image */}
            <div className="flex flex-col items-left text-left gap-4 sm:gap-6" data-aos="fade-right">
              <div>
                <h3 className="text-brand-accent font-semibold text-xs tracking-widest uppercase mb-2">
                  Address
                </h3>
                <p className="text-brand-dark text-xs sm:text-sm leading-relaxed">
                  Jl. Kh. A. Dahlan No.3, RW.5, Darat Sekip,<br />
                  Kec. Pontianak Kota, Kota Pontianak,<br />
                  Kalimantan Barat 78117
                </p>
              </div>
              <div>
                <h3 className="text-brand-accent font-semibold text-xs tracking-widest uppercase mb-2">
                  Hours
                </h3>
                <p className="text-brand-dark text-xs sm:text-sm">
                  Everyday: 06:00 AM – 02:00 AM
                </p>
              </div>
              <div>
                <h3 className="text-brand-accent font-semibold text-xs tracking-widest uppercase mb-2">
                  Contact
                </h3>
                <p className="text-brand-dark text-xs sm:text-sm">
                  +628 1234 5678 90
                </p>
              </div>
            </div>

            {/* Image Monkey Grounds — memanjang ke bawah, tidak terlalu lebar */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl mx-auto lg:mx-0 w-full lg:max-w-[400px]"
              style={{ height: '400px', maxHeight: '520px' }}
              data-aos="fade-left"
            >
              <Image
                src="/image/monkay grounds.png"
                alt="Monkey Grounds Coffee Shop"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 text-white">
                <h3 className="font-serif text-lg sm:text-xl font-bold mb-1">
                  Monkey Coffee
                </h3>
                <p className="text-white/80 text-xs sm:text-sm">
                  Creating moments, one cup at a time.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────── */}
      <footer className="bg-brand-dark text-white py-12 sm:py-16 md:py-20 lg:py-[120px] px-6 sm:px-10 md:px-16 lg:px-20">
        <div style={{maxWidth: '1536px', margin: '0 auto'}}>

          {/* Top row — responsive: 1 col mobile, 3 cols desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-3 items-start gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">

            {/* Col 1 — Brand (left on desktop, center on mobile) */}
            <div className="flex flex-col gap-2 sm:gap-3 text-center sm:text-left">
              <h3 className="font-serif text-sm sm:text-base font-bold text-white">
                Monkey Coffee
              </h3>
              <p className="text-white/70 text-xs leading-relaxed">
                Creating moments, one cup at a time.
              </p>
            </div>

            {/* Col 2 — Menu (center) */}
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <h4 className="font-semibold text-xs uppercase tracking-widest text-white">
                Menu
              </h4>
              <ul className="flex flex-col items-center gap-1.5 sm:gap-2 text-xs text-white/70">
                <li><a href="#menu" className="hover:text-white transition-colors">Our Signatures</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors">Non Coffee</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors">Food</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors">Pastry</a></li>
              </ul>
            </div>

            {/* Col 3 — Connect (right-aligned on desktop, center on mobile) */}
            <div className="flex flex-col items-center sm:items-end gap-2 sm:gap-3">
              <h4 className="font-semibold text-xs uppercase tracking-widest text-white">
                Connect
              </h4>
              <ul className="flex flex-col items-center sm:items-end gap-1.5 sm:gap-2 text-xs text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Whatsapp</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom — copyright */}
          <div className="border-t border-white/20 pt-6 sm:pt-8 lg:pt-10">
            <p className="text-white/50 text-xs text-center sm:text-left">
              &copy; 2026 Monkey Coffee. All rights reserved.
            </p>
          </div>

        </div>
      </footer>
    </>
  )
}
