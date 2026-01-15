"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Plane,
  Hotel,
  Users,
  Star,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Package {
  name: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  popular?: boolean;
}

const packages: Package[] = [
  {
    name: "Economy Umrah",
    description: "Affordable package with guided Umrah rites and shared accommodation.",
    price: "₦1,850,000",
    duration: "14 Days",
    features: [
      "Return flight (Lagos-Jeddah)",
      "Shared hotel accommodation",
      "Daily breakfast included",
      "Guided Ziyarah tours",
      "Visa processing",
      "24/7 group support",
    ],
  },
  {
    name: "Standard Umrah",
    description: "Balanced comfort package with premium hotels and transport.",
    price: "₦2,600,000",
    duration: "14 Days",
    features: [
      "Return flight (Lagos-Jeddah)",
      "3-star hotel near Haram",
      "Breakfast & Dinner included",
      "Private Ziyarah tours",
      "Visa processing",
      "Dedicated guide",
      "Airport transfers",
    ],
    popular: true,
  },
  {
    name: "Premium Umrah",
    description: "Luxury package with 5-star hotels and private guidance.",
    price: "₦4,200,000",
    duration: "14 Days",
    features: [
      "Business class flight",
      "5-star hotel adjacent to Haram",
      "All meals included",
      "Private Ziyarah & car",
      "VIP visa processing",
      "Personal religious guide",
      "Luxury transport",
    ],
  },
];

const hajjPackages: Package[] = [
  {
    name: "Economy Hajj",
    description: "Essential Hajj package with all necessary services.",
    price: "₦3,500,000",
    duration: "21 Days",
    features: [
      "Return flight (Lagos-Jeddah)",
      "Tent accommodation in Mina",
      "Food during Hajj days",
      "Guided Hajj rituals",
      "Visa & permits",
      "Medical support",
    ],
  },
  {
    name: "Standard Hajj",
    description: "Comfortable Hajj experience with better accommodations.",
    price: "₦5,500,000",
    duration: "21 Days",
    features: [
      "Return flight (Lagos-Jeddah)",
      "Hotel in Makkah & Madinah",
      "Air-conditioned tents",
      "All meals included",
      "Expert guides",
      "Medical & emergency support",
    ],
    popular: true,
  },
  {
    name: "VIP Hajj",
    description: "Exclusive Hajj package with premium services.",
    price: "₦8,500,000",
    duration: "21 Days",
    features: [
      "Business class flights",
      "Luxury 5-star hotels",
      "Premium tents with AC",
      "Personal religious scholar",
      "Private transport",
      "Exclusive support team",
    ],
  },
];

const services = [
  {
    title: "Visa Processing",
    description: "Complete assistance with Saudi visa applications and documentation.",
    icon: "📋",
  },
  {
    title: "Flight Booking",
    description: "Convenient flights from major Nigerian cities to Saudi Arabia.",
    icon: "✈️",
  },
  {
    title: "Hotel Accommodation",
    description: "Quality hotels in Makkah and Madinah near the Haram.",
    icon: "🏨",
  },
  {
    title: "Ground Transport",
    description: "Comfortable transfers between airports, hotels, and holy sites.",
    icon: "🚌",
  },
  {
    title: "Ziyarah Tours",
    description: "Guided tours to historical Islamic sites in Makkah and Madinah.",
    icon: "🕌",
  },
  {
    title: "Religious Guidance",
    description: "Experienced scholars to guide you through Hajj and Umrah rituals.",
    icon: "📿",
  },
];

const stats = [
  { value: "500+", label: "Pilgrims Served" },
  { value: "100%", label: "Satisfaction" },
  { value: "5+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
];

export default function ProductsPage() {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">
      <Navbar />

      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="relative py-24 text-white"
        style={{ backgroundColor: "#000080" }}>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1564769625905-50e93615e769?w=1920&q=80"
            alt="Kaaba"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000080] to-[#000185]" />
        </div>
        
        <div className="relative container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hajj & Umrah Packages
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Choose from our carefully crafted packages for a blessed and comfortable pilgrimage experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================
          STATS SECTION
      ========================== */}
      <section className="py-10" style={{ backgroundColor: "#FAE6B1" }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#000080] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#000185]/70 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          UMRAH PACKAGES
      ========================== */}
      <section className="py-24" id="packages">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#000080] mb-4">
              Umrah Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Choose the perfect Umrah package for your spiritual journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${pkg.popular ? 'border-[#F8D568]' : 'border-gray-100'}`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-[#000080]"
                    style={{ backgroundColor: "#F8D568" }}>
                    Most Popular
                  </div>
                )}

                <div className="p-8" style={{ backgroundColor: pkg.popular ? "#FAE6B1" : "#f8fafc" }}>
                  <h3 className="text-2xl font-bold text-[#000080] mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-[#000080]">
                      {pkg.price}
                    </span>
                    <span className="text-gray-500">/ person</span>
                  </div>
                  <div className="mt-2 text-sm text-[#000185]/70">
                    <Users className="w-4 h-4 inline mr-1" />
                    {pkg.duration}
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className={`block w-full py-4 rounded-xl font-semibold text-center transition-all hover:shadow-lg ${
                      pkg.popular
                        ? 'text-white hover:opacity-90'
                        : 'text-white hover:opacity-90'
                    }`}
                    style={{ backgroundColor: pkg.popular ? '#000080' : '#000080' }}
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          HAJJ PACKAGES
      ========================== */}
      <section className="py-24" style={{ backgroundColor: "#FAE6B1" }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#000080] mb-4">
              Hajj Packages
            </h2>
            <p className="text-[#000185]/70 max-w-2xl mx-auto text-lg">
              Fulfill your fifth pillar of Islam with our comprehensive Hajj packages
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {hajjPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${pkg.popular ? 'border-[#F8D568]' : 'border-gray-100'}`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-[#000080]"
                    style={{ backgroundColor: "#F8D568" }}>
                    Recommended
                  </div>
                )}

                <div className="p-8" style={{ backgroundColor: pkg.popular ? "#FAE6B1" : "#f8fafc" }}>
                  <h3 className="text-2xl font-bold text-[#000080] mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-[#000080]">
                      {pkg.price}
                    </span>
                    <span className="text-gray-500">/ person</span>
                  </div>
                  <div className="mt-2 text-sm text-[#000185]/70">
                    <Users className="w-4 h-4 inline mr-1" />
                    {pkg.duration}
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className="block w-full py-4 rounded-xl font-semibold text-white text-center hover:opacity-90 transition-all hover:shadow-lg"
                    style={{ backgroundColor: '#000080' }}
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          ADDITIONAL SERVICES
      ========================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#000080] mb-4">
              Additional Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We offer comprehensive services to make your pilgrimage comfortable and blessed
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border-2 hover:shadow-lg transition-all"
                style={{ borderColor: "#FAE6B1", backgroundColor: "#FAE6B1/30" }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#000080] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#000185]/70">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          CTA SECTION
      ========================== */}
      <section className="py-20 text-white" style={{ backgroundColor: "#000080" }}>
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Spiritual Journey?
            </h2>
            <p className="text-white/90 text-lg mb-10">
              Contact us today to book your Hajj or Umrah package and experience a blessed pilgrimage.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
                style={{ backgroundColor: "#F8D568", color: "#000080" }}
              >
                Contact Us
              </a>
              <a
                href="tel:+2340000000000"
                className="px-8 py-4 rounded-xl font-semibold border-2 border-white hover:bg-white hover:text-[#000080] transition"
              >
                Call  +234 703 082 8286
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

