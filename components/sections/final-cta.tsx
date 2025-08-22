import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0 -z-10 bg-brand" />
      <div className="container py-16 md:py-20 text-white text-center">
        <h2 className="font-serif text-2xl md:text-3xl tracking-tight max-w-3xl mx-auto">
          Ready to take the next step? We work remotely across North America and beyond.
        </h2>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-ink hover:bg-white/90">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}


