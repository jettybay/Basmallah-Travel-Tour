"use client";

import { useState } from "react";
import {
  PhoneCall,
  MapPin,
  FileText,
  Plane,
  Hotel,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Step Card Component
function StepCard({
  icon: Icon,
  title,
  description,
  stepNumber,
  className = "",
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  stepNumber: number;
  className?: string;
}) {
  return (
    <Card className={`relative group hover:shadow-xl transition-all duration-300 border-2 ${className}`}
      style={{ borderColor: "#F8D568", backgroundColor: "#FAE6B1" }}
    >
      <div className="absolute -top-4 left-6 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300"
        style={{ backgroundColor: "#000080" }}>
        <span className="text-white font-bold text-lg">{stepNumber}</span>
      </div>
      <CardContent className="pt-12 pb-6">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-300"
          style={{ backgroundColor: "#000080" }}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold text-[#000080] mb-2">{title}</h3>
        <p className="text-[#000185]/80 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

// Feature Card Component
function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="group text-center p-6 rounded-2xl transition-all duration-300 hover:shadow-xl"
      style={{ backgroundColor: "#FAE6B1" }}>
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: "#000080" }}>
        <Icon className="w-8 h-8 text-[#F8D568]" />
      </div>
      <h3 className="text-lg font-bold text-[#000080] mb-2">{title}</h3>
      <p className="text-[#000185]/70">{description}</p>
    </div>
  );
}

// Stat Card Component
function StatCard({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
}) {
  return (
    <div className="text-center p-4">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
        style={{ backgroundColor: "#F8D568" }}>
        <Icon className="w-6 h-6 text-[#000080]" />
      </div>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-white/80 text-sm">{label}</div>
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* =========================
            HERO SECTION
        ========================== */}
        <section className="relative py-20 text-white"
          style={{ backgroundColor: "#000080" }}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F8D568] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FAE6B1] rounded-full blur-3xl"></div>
          </div>

          <div className="relative container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 px-4 py-1 text-sm" style={{ backgroundColor: "#F8D568", color: "#000080" }}>
                <Star className="w-3 h-3 mr-1" />
                Your Trusted Pilgrimage Partner
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                How Basmallah Travel Works
              </h1>

              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Your trusted partner for Hajj and Umrah. We make your spiritual journey 
                seamless, comfortable, and blessed.
              </p>

            </div>
          </div>
        </section>

        {/* =========================
            STATS SECTION
        ========================== */}
        <section className="py-8" style={{ backgroundColor: "#000185" }}>
          <div className="container mx-auto px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard icon={Star} value="500+" label="Pilgrims Served" />
              <StatCard icon={Hotel} value="100%" label="Hotel Satisfaction" />
              <StatCard icon={Plane} value="50+" label="Destinations" />
              <StatCard icon={CheckCircle} value="24/7" label="Support" />
            </div>
          </div>
        </section>

        {/* =========================
            PROCESS STEPS
        ========================== */}
        <section className="py-20 bg-gray-50" >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-1" style={{ backgroundColor: "#FAE6B1", color: "#000080" }}>
                Simple Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#000080] mb-4">
                How to Book Your Pilgrimage
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Booking your Hajj or Umrah journey is easy. Follow these simple steps to begin your spiritual experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-32 left-[16.66%] right-[16.66%] h-1" 
                style={{ backgroundColor: "#F8D568" }}></div>

              <StepCard
                icon={PhoneCall}
                title="Contact Us"
                description="Reach out via phone, WhatsApp, or visit our office to discuss your pilgrimage plans and package preferences."
                stepNumber={1}
              />
              <StepCard
                icon={FileText}
                title="Documentation"
                description="Our team will guide you through the visa application process and required documentation for your journey."
                stepNumber={2}
              />
              <StepCard
                icon={Plane}
                title="Travel & Worship"
                description="Book your flights, receive your travel itinerary, and prepare for a blessed spiritual journey to the Holy Lands."
                stepNumber={3}
              />
            </div>
          </div>
        </section>

        {/* =========================
            SERVICES SECTION
        ========================== */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-1" style={{ backgroundColor: "#FAE6B1", color: "#000080" }}>
                What We Offer
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#000080] mb-4">
                Our Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive services to ensure a comfortable and spiritually fulfilling pilgrimage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-2xl" style={{ backgroundColor: "#FAE6B1" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#000080" }}>
                  <FileText className="w-7 h-7 text-[#F8D568]" />
                </div>
                <h3 className="text-lg font-bold text-[#000080] mb-2">Visa Processing</h3>
                <p className="text-sm text-[#000185]/70">Complete visa assistance and documentation support.</p>
              </div>

              <div className="text-center p-6 rounded-2xl" style={{ backgroundColor: "#FAE6B1" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#000080" }}>
                  <Plane className="w-7 h-7 text-[#F8D568]" />
                </div>
                <h3 className="text-lg font-bold text-[#000080] mb-2">Flight Booking</h3>
                <p className="text-sm text-[#000185]/70">Convenient flight arrangements to and from Saudi Arabia.</p>
              </div>

              <div className="text-center p-6 rounded-2xl" style={{ backgroundColor: "#FAE6B1" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#000080" }}>
                  <Hotel className="w-7 h-7 text-[#F8D568]" />
                </div>
                <h3 className="text-lg font-bold text-[#000080] mb-2">Accommodation</h3>
                <p className="text-sm text-[#000185]/70">Quality hotels near the Haram in Makkah and Madinah.</p>
              </div>

              <div className="text-center p-6 rounded-2xl" style={{ backgroundColor: "#FAE6B1" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#000080" }}>
                  <MapPin className="w-7 h-7 text-[#F8D568]" />
                </div>
                <h3 className="text-lg font-bold text-[#000080] mb-2">Guided Tours</h3>
                <p className="text-sm text-[#000185]/70">Experienced guides for Ziyarah and spiritual activities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            WHY CHOOSE US
        ========================== */}
        <section className="py-20" style={{ backgroundColor: "#FAE6B1" }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#000080] mb-4">
                Why Choose Basmallah Travel?
              </h2>
              <p className="text-[#000185]/70 max-w-2xl mx-auto">
                We are committed to providing the best pilgrimage experience for our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={Star}
                title="Experienced Team"
                description="Years of experience in Hajj and Umrah services"
              />
              <FeatureCard
                icon={Hotel}
                title="Premium Hotels"
                description="Close to Haram with excellent amenities"
              />
              <FeatureCard
                icon={CheckCircle}
                title="Hassle-Free"
                description="Complete support from booking to return"
              />
              <FeatureCard
                icon={PhoneCall}
                title="24/7 Support"
                description="Round-the-clock assistance for pilgrims"
              />
            </div>
          </div>
        </section>

        {/* =========================
            CTA SECTION
        ========================== */}
        <section className="py-20 text-white" style={{ backgroundColor: "#000080" }}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Contact us today to start planning your blessed pilgrimage.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="text-[#000080]"
                style={{ backgroundColor: "#F8D568" }}
                asChild
              >
                <Link href="tel:+2340000000000">
                  <PhoneCall className="w-5 h-5 mr-2" />
                  Call  +234 703 082 8286
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#000080]"
                asChild
              >
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>

            <p className="mt-8 text-white/60 text-sm">
              May Allah accept your prayers and grant you a blessed journey
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

