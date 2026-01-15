"use client";

import Link from "next/link";
import { FaKaaba, FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000080] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#F8D568" }}>
                <FaKaaba className="w-6 h-6 text-[#000080]" />
              </div>
              <span className="text-xl font-bold">Basmallah Travel & Tour</span>
            </div>
            <p className="text-white/80 max-w-md mb-6">
              Your trusted partner for Hajj and Umrah pilgrimages. We provide 
              comprehensive travel packages to make your spiritual journey memorable and seamless.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F8D568] hover:text-[#000080] transition-all"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F8D568] hover:text-[#000080] transition-all"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F8D568] hover:text-[#000080] transition-all"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F8D568] hover:text-[#000080] transition-all"
              >
                <FaTiktok className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4" style={{ color: "#F8D568" }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/80 hover:text-[#F8D568] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#packages" className="text-white/80 hover:text-[#F8D568] transition">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-[#F8D568] transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4" style={{ color: "#F8D568" }}>
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/80">
                <Phone className="w-4 h-4" />
                <span> +234 703 082 8286</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Mail className="w-4 h-4" />
                <span>info@basmallah.com</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} Basmallah Travel & Tour. All rights reserved.
          </p>
          <p className="text-white/40 text-xs mt-2">
            May Allah accept your pilgrimage (Hajj & Umrah)
          </p>
        </div>
      </div>
    </footer>
  );
}

