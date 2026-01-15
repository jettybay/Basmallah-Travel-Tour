"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaKaaba, FaPlaneDeparture, FaHotel, FaPhoneAlt } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-[#000185]">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden min-h-[600px]">
        <div className="absolute inset-0">
          <Image
            src="/images/Makkah.jpg"
            alt="Kaaba in Makkah"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#000080]/90 via-[#000185]/80 to-[#000080]/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-semibold tracking-widest text-[#F8D568] uppercase">
              Basmallah Travel & Tour
            </p>

            <h1 className="mt-4 text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-white">
              Guiding Your Sacred <br />
              <span className="text-[#F8D568]">Hajj & Umrah Journey</span>
            </h1>

            <p className="mt-6 text-lg text-white/90 max-w-xl">
              We provide trusted, affordable and spiritually fulfilling travel
              experiences for Hajj and Umrah pilgrims across the world.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#packages"
                className="px-7 py-3 rounded-full font-semibold text-[#000080]"
                style={{ backgroundColor: "#F8D568" }}
              >
                Explore Packages
              </a>

              <a
                href="#contact"
                className="px-7 py-3 rounded-full font-semibold border-2 border-white text-white hover:bg-white hover:text-[#000080] transition"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAE6B1]">
              <Image
                src="/images/Makkah-And-Madinah.jpg"
                alt="Hajj pilgrims at the Kaaba"
                width={500}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>

            <div
              className="absolute -bottom-6 -left-6 px-6 py-4 rounded-2xl shadow-xl text-sm font-semibold text-[#000080]"
              style={{ backgroundColor: "#92EE91" }}
            >
              Trusted by pilgrims worldwide
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#000080]">
            Our Specialized Services
          </h2>
          <p className="mt-4 text-[#000185]/70">
            Everything you need for a smooth and spiritually focused journey.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-3xl p-8 shadow-lg border ${
                services.length % 2 !== 0 && i === services.length - 1
                  ? "col-span-2 lg:col-span-1 w-[calc(50%_-_1.25rem)] lg:w-full mx-auto text-center lg:text-left"
                  : ""
              }`}
              style={{ backgroundColor: "#FAE6B1", borderColor: "#F8D568" }}
            >
              <div>
                <div className="text-3xl text-[#000080] mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-[#000080]">{s.title}</h3>
                <p className="mt-3 text-[#000185]/80 text-sm">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PACKAGES ================= */}
      <section id="packages" className="py-24" style={{ backgroundColor: "#000080" }}>
        <div className="max-w-7xl mx-auto px-6 text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center"
          >
            Hajj & Umrah Packages
          </motion.h2>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-10">
            {packages.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-3xl p-8 shadow-xl border ${
                  packages.length % 2 !== 0 && i === packages.length - 1
                    ? "col-span-2 md:col-span-1 w-[calc(50%_-_1.25rem)] md:w-full mx-auto text-center md:text-left"
                    : ""
                }`}
                style={{ backgroundColor: "#FAE6B1", color: "#000185" }}
              >
                <div>
                  <h3 className="text-xl font-bold text-[#000080]">{p.name}</h3>
                  <p className="mt-3 text-sm opacity-80">{p.desc}</p>
                  <p className="mt-6 text-2xl font-extrabold text-[#000080]">
                    {p.price}
                  </p>
                  <a
                    href="#contact"
                    className="inline-block mt-6 px-6 py-3 rounded-full font-semibold"
                    style={{ backgroundColor: "#92EE91" }}
                  >
                    Book Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24" style={{ backgroundColor: "#FAE6B1" }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#000080]">
              Why Choose Basmallah Travel?
            </h2>
            <p className="mt-4 text-[#000185]/70 max-w-2xl mx-auto">
              We are committed to providing the best spiritual journey experience for our pilgrims.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-[#000080]">{feature.title}</h3>
                <p className="mt-2 text-sm text-[#000185]/70">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#000080]">
              What Our Pilgrims Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-3xl shadow-lg ${
                  testimonials.length % 2 !== 0 && i === testimonials.length - 1
                    ? "col-span-2 md:col-span-1 w-[calc(50%_-_1rem)] md:w-full mx-auto text-center md:text-left"
                    : ""
                }`}
                style={{ backgroundColor: "#FAE6B1" }}
              >
                <div>
                  <p className="text-[#000185]/80 italic">"{t.text}"</p>
                  <div
                    className={`mt-6 flex items-center gap-4 ${
                      testimonials.length % 2 !== 0 &&
                      i === testimonials.length - 1
                        ? "justify-center md:justify-start"
                        : ""
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#000080] flex items-center justify-center text-white font-bold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-[#000080]">{t.name}</p>
                      <p className="text-sm text-[#000185]/70">{t.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#000080]"
        >
          Start Your Spiritual Journey Today
        </motion.h2>

        <p className="mt-4 text-[#000185]/70">
          Our team is ready to guide you every step of the way.
        </p>

        <div
          className="mt-10 inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold shadow-lg text-white"
          style={{ backgroundColor: "#000080" }}
        >
          <FaPhoneAlt />
           +234 703 082 8286
        </div>

        <div className="mt-8 flex justify-center gap-6">
          <a href="#" className="text-[#000080] hover:text-[#F8D568] transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" className="text-[#000080] hover:text-[#F8D568] transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" className="text-[#000080] hover:text-[#F8D568] transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a href="#" className="text-[#000080] hover:text-[#F8D568] transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </main>
    </>
  );
}

/* ================= DATA ================= */

const services = [
  {
    title: "Hajj Guidance",
    desc: "Complete assistance from registration to return, led by experienced guides.",
    icon: <FaKaaba />,
  },
  {
    title: "Flight Booking",
    desc: "Affordable and flexible international flight arrangements.",
    icon: <FaPlaneDeparture />,
  },
  {
    title: "Hotel & Transport",
    desc: "Comfortable accommodations close to Haram with reliable transport.",
    icon: <FaHotel />,
  },
];

const packages = [
  {
    name: "Economy Umrah",
    desc: "Affordable package with guided Umrah rites and shared accommodation.",
    price: "₦1,850,000",
  },
  {
    name: "Standard Umrah",
    desc: "Balanced comfort package with premium hotels and transport.",
    price: "₦2,600,000",
  },
  {
    name: "Premium Umrah",
    desc: "Luxury package with 5-star hotels and private guidance.",
    price: "₦4,200,000",
  },
];

const features = [
  {
    title: "Expert Guides",
    desc: "Experienced scholars and guides throughout your journey",
    icon: "🕋",
  },
  {
    title: "Comfortable Stay",
    desc: "Premium hotels near the Haram in Makkah and Madinah",
    icon: "🏨",
  },
  {
    title: "Easy Visa Process",
    desc: "Hassle-free visa processing for all pilgrims",
    icon: "📋",
  },
  {
    title: "24/7 Support",
    desc: "Round-the-clock assistance for your convenience",
    icon: "📞",
  },
];

const testimonials = [
  {
    name: "Ahmad Ibrahim",
    location: "Lagos, Nigeria",
    text: "Basmallah Travel made my Umrah journey seamless. The team was professional and supportive throughout.",
  },
  {
    name: "Fatima Abdullahi",
    location: "Abuja, Nigeria",
    text: "Excellent service! From visa to accommodation, everything was perfectly arranged. Highly recommended.",
  },
  {
    name: "Mohammed Bello",
    location: "Port Harcourt, Nigeria",
    text: "A blessed experience. The guides were knowledgeable and the accommodations were excellent.",
  },
];
