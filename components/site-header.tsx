"use client";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const nav = [
  { href: "/#philosophy", label: "Our Philosophy" },
  { href: "/career-transition", label: "Career Transition" },
  { href: "/career-management", label: "Career Management" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/newsletters", label: "Newsletters" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background/75 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="bg-brand hover:bg-brand-dark">
            <Link href="/contact">Book a Call</Link>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-4">
                {nav.map((item) => (
                  <Link key={item.href} href={item.href} className="text-base">
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="bg-brand hover:bg-brand-dark mt-2">
                  <Link href="/contact">Book a Call</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}


