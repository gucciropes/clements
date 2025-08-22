import Link from "next/link";

export function Philosophy() {
  return (
    <section id="philosophy" className="container py-16 md:py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="font-serif text-2xl md:text-3xl tracking-tight">A philosophy grounded in clarity, evidence, and momentum</h2>
          <p className="mt-4 text-foreground/80">
            We combine rigorous assessment with pragmatic coaching to help you identify patterns, make better decisions, and take confident action. Our process is structured and high-touch, tailored for senior leaders and complex contexts.
          </p>
          <Link href="/#philosophy" className="inline-block mt-6 text-brand hover:text-brand-dark">
            Our Philosophy →
          </Link>
        </div>
        <div className="rounded-xl bg-lightgray p-6">
          <ul className="grid sm:grid-cols-2 gap-4 text-sm">
            <li className="p-4 rounded-lg bg-white border">Evidence-based frameworks</li>
            <li className="p-4 rounded-lg bg-white border">High-touch accountability</li>
            <li className="p-4 rounded-lg bg-white border">Executive-ready materials</li>
            <li className="p-4 rounded-lg bg-white border">Global industry experience</li>
          </ul>
        </div>
      </div>
    </section>
  );
}


