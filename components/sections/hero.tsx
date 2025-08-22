import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative isolate">
      <div
        className="absolute inset-0 -z-10 bg-center bg-cover"
        style={{ backgroundImage: "url('/football.jpg')" }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      <div className="container py-28 sm:py-36 text-center text-white">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight max-w-4xl mx-auto animate-fade-in-up">
          Helping Executives Realize Their Potential in Career Transition & Beyond.
        </h1>
        <p className="mt-5 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          High-touch, personalized coaching for leaders navigating change.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-brand hover:bg-brand-dark">
            <Link href="/contact">Book a Call</Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20">
            <Link href="#philosophy">Our Approach</Link>
          </Button>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-white/80">
          <span className="rounded-full bg-white/10 px-4 py-2 text-sm border border-white/15">750+ executives coached</span>
          <span className="rounded-full bg-white/10 px-4 py-2 text-sm border border-white/15">Evidence-based</span>
          <span className="rounded-full bg-white/10 px-4 py-2 text-sm border border-white/15">Global reach</span>
        </div>
      </div>
    </section>
  );
}


