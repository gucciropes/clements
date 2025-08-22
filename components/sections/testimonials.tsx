"use client";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const quotes = [
  {
    quote:
      "Lou challenged my assumptions and helped me land a COO role faster than I thought possible.",
    author: "COO, Global FinTech",
  },
  {
    quote:
      "The structure, the feedback, the accountability—this is real executive coaching.",
    author: "SVP Product, SaaS",
  },
  {
    quote:
      "I finally told a story that matched my impact. The offers followed.",
    author: "VP Strategy, Healthcare",
  },
];

export function Testimonials() {
  return (
    <section className="container py-16 md:py-20">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="font-serif text-2xl md:text-3xl tracking-tight">What clients say</h2>
        <a href="/testimonials" className="text-brand hover:text-brand-dark text-sm">All testimonials →</a>
      </div>
      <Carousel className="w-full">
        <CarouselContent>
          {quotes.map((q) => (
            <CarouselItem key={q.quote} className="md:basis-1/2 lg:basis-1/3">
              <blockquote className="h-full rounded-xl border bg-white p-6 shadow-sm">
                <p className="text-base leading-7">“{q.quote}”</p>
                <footer className="mt-4 text-sm text-foreground/70">— {q.author}</footer>
              </blockquote>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}


