import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Compass, LineChart, Handshake } from "lucide-react";

const services = [
  {
    title: "Career Transition",
    href: "/career-transition",
    icon: Compass,
    body:
      "Targeted search strategy, positioning, and end-to-end support for executive moves.",
  },
  {
    title: "Career Management",
    href: "/career-management",
    icon: LineChart,
    body:
      "Performance, influence, and strategic planning for sustained leadership impact.",
  },
  {
    title: "High-Touch Coaching",
    href: "/contact",
    icon: Handshake,
    body: "A bespoke engagement model built around your goals and pace.",
  },
];

export function Services() {
  return (
    <section className="container py-16 md:py-20">
      <div className="mb-8">
        <h2 className="font-serif text-2xl md:text-3xl tracking-tight">How we work together</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map(({ title, href, icon: Icon, body }) => (
          <Link key={title} href={href} className="group">
            <Card className="h-full border-brand/10 group-hover:shadow-soft transition-shadow">
              <CardHeader>
                <div className="h-10 w-10 rounded-md bg-brand text-white grid place-items-center mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle className="font-serif text-xl flex items-center justify-between">
                  {title}
                  <ArrowRight className="h-5 w-5 text-brand opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80">{body}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}


