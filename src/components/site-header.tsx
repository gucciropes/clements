"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/65">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img src="/Isotype.svg" alt="Clements United" className="w-full h-full" />
              </div>
              <span className="text-xl font-bold text-slate-900">Clements United</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-slate-700 hover:text-[#AC0D2B] transition-colors font-medium">
              About
            </Link>
            <Link href="/services" className="text-slate-700 hover:text-[#AC0D2B] transition-colors font-medium">
              Services
            </Link>
            <Link href="/#insights" className="text-slate-700 hover:text-[#AC0D2B] transition-colors font-medium">
              Insights
            </Link>
            <Link href="/testimonials" className="text-slate-700 hover:text-[#AC0D2B] transition-colors font-medium">
              Testimonials
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-[#AC0D2B] transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
              Schedule a Call
            </Button>
            <a 
              href="https://ca.linkedin.com/in/louclements" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 bg-[#0077B5] rounded flex items-center justify-center hover:bg-[#005885] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-slate-700 hover:text-[#AC0D2B] hover:bg-slate-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <nav className="py-4 space-y-4">
              <Link
                href="/about"
                className="block px-4 py-2 text-slate-700 hover:text-[#AC0D2B] hover:bg-slate-50 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="block px-4 py-2 text-slate-700 hover:text-[#AC0D2B] hover:bg-slate-50 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/#insights"
                className="block px-4 py-2 text-slate-700 hover:text-[#AC0D2B] hover:bg-slate-50 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Insights
              </Link>
              <Link
                href="/testimonials"
                className="block px-4 py-2 text-slate-700 hover:text-[#AC0D2B] hover:bg-slate-50 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 text-slate-700 hover:text-[#AC0D2B] hover:bg-slate-50 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-4 pt-4">
                <Button className="w-full bg-[#AC0D2B] hover:bg-[#8A0A22] text-white">
                  Schedule a Call
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
