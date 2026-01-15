"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { FaTiktok, FaKaaba } from "react-icons/fa";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      
    <main className="bg-white text-gray-900 overflow-hidden">
      {/* HERO */}
      <section className="relative py-20" style={{ backgroundColor: "#000080" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#FAE6B1] to-transparent" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto px-6 text-center relative z-10"
        >
          <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: "#F8D568" }}>
            <FaKaaba className="w-10 h-10 text-[#000080]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Get in touch with us for your Hajj and Umrah journey
          </p>
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* CONTACT DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <h2 className="text-4xl font-bold mb-2 text-[#000080]">
              Get in Touch
            </h2>

           <p className="opacity-95 max-w-2xl pb-10 text-gray-600">
            Reach out for bookings, inquiries, or any questions about your pilgrimage journey.
          </p>

            <div className="grid md:grid-cols-3 gap-8 w-full max-w-4xl">
              <ContactItem
                icon={<MapPin />}
                title="Office Address"
                text="Lagos, Nigeria"
              />

              <ContactItem
                icon={<Phone />}
                title="Phone"
                text=" +234 703 082 8286"
              />

              <ContactItem
                icon={<Mail />}
                title="Email"
                text="info@basmallah.com"
              />
            </div>

            {/* SOCIAL MEDIA */}
            <div className="mt-12 flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-4 text-[#000080]">
                Connect with us
              </h3>

              <div className="flex gap-5">
                <SocialIcon
                  icon={<Facebook />}
                  link="#"
                />
                <SocialIcon
                  icon={<Instagram />}
                  link="#"
                />
                <SocialIcon
                  icon={<Twitter />}
                  link="#"
                />
                <SocialIcon
                  icon={<FaTiktok />}
                  link="#"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16" style={{ backgroundColor: "#FAE6B1" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl font-bold text-[#000080] mb-4">
            Ready to Start Your Spiritual Journey?
          </h2>
          <p className="text-[#000185]/70 mb-8">
            Contact us today and let us help make your Hajj or Umrah pilgrimage a blessed experience.
          </p>
          <a
            href="tel:+2340000000000"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white hover:opacity-90 transition"
            style={{ backgroundColor: "#000080" }}
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
    </>
  );

}

/* ---------- COMPONENTS ---------- */

function ContactItem({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-lg"
    >
      <div className="text-[#000080] mb-3">{icon}</div>
      <div>
        <h4 className="font-semibold text-[#000080]">{title}</h4>
        <p className="text-gray-600 mt-1">{text}</p>
      </div>
    </motion.div>
  );
}

function SocialIcon({
  icon,
  link,
}: {
  icon: React.ReactNode;
  link: string;
}) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className="w-11 h-11 flex items-center justify-center rounded-full border-2 hover:bg-[#000080] hover:text-white hover:border-[#000080] transition"
      style={{ borderColor: "#000080", color: "#000080" }}
    >
      {icon}
    </motion.a>
  );
}

