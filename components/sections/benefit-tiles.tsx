import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, Trophy } from "lucide-react";

const items = [
  {
    title: "Sometimes you need a new position…",
    icon: Briefcase,
    body:
      "Clarify your value, target the right roles, and navigate the search with precision.",
  },
  {
    title: "Sometimes you need a new team…",
    icon: Users,
    body:
      "Map the stakeholders, build alliances, and lead change with confidence.",
  },
  {
    title: "Sometimes you need a new game.",
    icon: Trophy,
    body:
      "Reframe possibilities, explore pivots, and design a path that fits your life.",
  },
];

export function BenefitTiles() {
  return (
    <section className="container py-16 md:py-20">
      <div className="mb-8 flex items-center gap-3">
        <Badge className="bg-brand/10 text-brand border-brand/20" variant="outline">
          What We Help With
        </Badge>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ title, icon: Icon, body }) => (
          <Card key={title} className="border-brand/15 hover:shadow-soft transition-shadow">
            <CardHeader>
              <div className="h-10 w-10 rounded-md bg-brand text-white grid place-items-center mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <CardTitle className="font-serif text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 text-sm leading-6">{body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}


