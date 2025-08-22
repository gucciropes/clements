import Link from "next/link";

const posts = [
  {
    title: "Designing a Search That Works",
    date: "Jan 2025",
    excerpt: "How to narrow, test, and refine your executive search strategy.",
  },
  {
    title: "Narratives that Move Offers",
    date: "Dec 2024",
    excerpt: "A practical approach to telling an executive story that lands.",
  },
  {
    title: "Managing Up: The Executive Edition",
    date: "Nov 2024",
    excerpt: "Patterns and plays for influence at the senior level.",
  },
];

export function Newsletter() {
  return (
    <section className="container py-16 md:py-20">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="font-serif text-2xl md:text-3xl tracking-tight">Insights</h2>
        <Link href="/newsletters" className="text-brand hover:text-brand-dark text-sm">All posts →</Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <article key={p.title} className="rounded-xl border bg-white p-6 hover:shadow-soft transition-shadow">
            <h3 className="font-serif text-lg">{p.title}</h3>
            <p className="text-xs text-foreground/60 mt-1">{p.date}</p>
            <p className="text-sm text-foreground/80 mt-3">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}


