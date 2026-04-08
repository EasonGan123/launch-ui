import { cn } from "@/lib/utils";

import { Card, CardContent } from "../../ui/card";
import { Section } from "../../ui/section";

interface PricingProps {
  title?: string;
  description?: string;
  additionalDescription?: string;
  testimonials?: { quote: string; name: string }[] | false;
  className?: string;
}

export default function Pricing({
  title = "Reduce AI token usage and lower prompt costs",
  description = "reducr is a browser extension built for AI users who want to reduce token usage and lower the cost of using tools like Cursor and Claude. It helps clean up bloated prompts, repeated context, and unnecessary verbosity before a request is sent, making AI workflows more efficient without changing the way users already work.",
  additionalDescription = "By showing a clearer, more compact version of a prompt before it is submitted, reducr helps users understand where token waste is coming from and how much they can save. The product is designed to keep optimization simple, visible, and reversible, so users stay in control while spending less over time.",
  testimonials = [
    {
      quote:
        "reducr made it much easier to see where my AI spend was actually coming from.",
      name: "Early beta user",
    },
    {
      quote:
        "The before-and-after prompt view is clean, practical, and actually useful.",
      name: "Product engineer",
    },
    {
      quote:
        "This feels like a natural layer for anyone using Cursor or Claude heavily.",
      name: "Indie founder",
    },
  ],
  className = "",
}: PricingProps) {
  return (
    <Section className={cn(className)}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        {(title || description || additionalDescription) && (
          <div className="animate-appear flex flex-col items-center gap-4 px-4 text-center opacity-0 sm:gap-8">
            {title && (
              <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
                {description}
              </p>
            )}
            {additionalDescription && (
              <p className="text-md text-muted-foreground max-w-[780px] font-medium sm:text-lg">
                {additionalDescription}
              </p>
            )}
          </div>
        )}
        {testimonials !== false && testimonials.length > 0 && (
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <Card
                key={item.name}
                className="animate-appear opacity-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <CardContent className="space-y-4 p-6">
                  <p className="text-muted-foreground text-sm">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <p className="text-sm font-semibold">{item.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
