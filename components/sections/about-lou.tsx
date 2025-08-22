import Link from "next/link";

export function AboutLou() {
  return (
    <section className="container py-16 md:py-20">
      <div className="rounded-2xl bg-lightgray p-6 md:p-10 grid md:grid-cols-[160px,1fr] gap-6 items-center">
        <div className="h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden border bg-[url('/lou.jpg')] bg-cover bg-center" aria-label="Portrait of Lou Clements" />
        <div>
          <h3 className="font-serif text-xl md:text-2xl tracking-tight">Lou Clements has guided 750+ executives worldwide through successful transitions.</h3>
          <p className="mt-3 text-foreground/80 text-sm md:text-base">
            With a background across industries and stages, Lou brings a blend of rigor and empathy to help leaders navigate complexity and deliver results.
          </p>
          <Link href="/career-transition" className="inline-block mt-4 text-brand hover:text-brand-dark">Explore our foundation →</Link>
        </div>
      </div>
    </section>
  );
}


