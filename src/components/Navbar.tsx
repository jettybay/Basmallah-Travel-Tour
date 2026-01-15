"use client";

import { usePathname } from "next/navigation";
import { motion, useSpring } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { Menu } from "lucide-react";
import { FaKaaba } from "react-icons/fa";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

export default function Navbar() {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: "0px", width: "0px" });

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Packages", href: "/#packages" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/contact" },
  ];

  // Update active index based on pathname
  useEffect(() => {
    const foundIndex = navItems.findIndex((item) => {
      if (item.href === "/") return pathname === "/";
      if (item.href.startsWith("/#")) return pathname === "/";
      return pathname === item.href;
    });
    setActiveIndex(foundIndex >= 0 ? foundIndex : 0);
  }, [pathname]);

  // Calculate indicator position based on active nav item
  useEffect(() => {
    const updateIndicator = () => {
      const activeEl = navRefs.current[activeIndex];
      const container = containerRef.current;
      
      if (activeEl && container) {
        const containerRect = container.getBoundingClientRect();
        const activeRect = activeEl.getBoundingClientRect();
        
        // Center the indicator under the active item with some padding
        const width = 40; // Short underline width in pixels
        const left = activeRect.left - containerRect.left + (activeRect.width / 2) - (width / 2);
        
        setIndicatorStyle({
          left: `${left}px`,
          width: `${width}px`,
        });
      }
    };

    updateIndicator();
    // Update on resize
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeIndex]);

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <motion.div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#000080" }}
            whileHover={{ scale: 1.08, rotate: 5 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <FaKaaba className="w-6 h-6 text-[#F8D568]" />
          </motion.div>
          <div className="flex flex-col items-start hidden sm:flex">
            <motion.span
              className="text-xl font-bold text-[#000080]"
              whileHover={{ color: "#000185" }}
              transition={{ duration: 0.3 }}
            >
              Basmallah
            </motion.span>
            <motion.span
              className="text-lg font-semibold text-[#000080]"
              whileHover={{ color: "#000185" }}
              transition={{ duration: 0.3 }}
            >
              Travel & Tours
            </motion.span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center relative" ref={containerRef}>
          {/* Active indicator background - short underline */}
          <motion.div
            className="absolute bottom-0 h-0.5 rounded-full"
            style={{
              backgroundColor: "#F8D568",
            }}
            initial={false}
            animate={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
            }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 35,
            }}
          />

          {navItems.map((item, index) => {
            const isActive =
              pathname === item.href ||
              (item.href === "/" && pathname === "/") ||
              (item.href.startsWith("/#") && pathname === "/");

            return (
              <Link
                key={item.label}
                ref={(el) => { navRefs.current[index] = el; }}
                href={item.href}
                className={`relative px-5 py-3 font-medium transition-all duration-500 ${
                  isActive ? "text-[#000080]" : "text-gray-500 hover:text-[#000080]"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <motion.span
                  initial={false}
                  animate={{
                    y: isActive ? 0 : 0,
                    scale: isActive ? 1 : 1,
                  }}
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {item.label}
                </motion.span>
              </Link>
            );
          })}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.a
              href="#contact"
              className="ml-6 px-7 py-2.5 rounded-full font-semibold text-white shadow-lg"
              style={{ backgroundColor: "#000080" }}
              whileHover={{
                scale: 1.06,
                boxShadow: "0px 12px 35px rgba(0, 0, 128, 0.4)",
              }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Book Now
            </motion.a>
          </motion.div>
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </motion.div>
          </SheetTrigger>

          <SheetContent side="right" className="w-64">
            <VisuallyHidden>
              <SheetTitle>Mobile Navigation Menu</SheetTitle>
            </VisuallyHidden>

            <div className="flex flex-col space-y-6 mt-16 px-4">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.1 + 0.1,
                      duration: 0.5,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      className="text-lg font-medium py-3 block border-b-2 border-transparent hover:border-[#F8D568] transition-all duration-300"
                      style={{
                        color: pathname === item.href ||
                          (item.href === "/" && pathname === "/") ||
                          (item.href.startsWith("/#") && pathname === "/")
                          ? "#000080"
                          : "#6b7280",
                      }}
                      onClick={() => setActiveIndex(index)}
                    >
                      <motion.span
                        whileHover={{ x: 8 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.label}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <motion.a
                  href="#contact"
                  className="block w-full py-3.5 rounded-full font-semibold text-white text-center"
                  style={{ backgroundColor: "#000080" }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0px 8px 25px rgba(0, 0, 128, 0.35)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  Book Now
                </motion.a>
              </motion.div>

              <motion.div
                className="self-center mt-4"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, type: "spring", stiffness: 200, damping: 15 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer"
                  style={{ backgroundColor: "#000080" }}
                  whileHover={{ scale: 1.12, rotate: 180 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaKaaba className="w-8 h-8 text-[#F8D568]" />
                </motion.div>
              </motion.div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
