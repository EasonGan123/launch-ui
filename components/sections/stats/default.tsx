import { Section } from "../../ui/section";

interface StatItemProps {
  label: string;
  value: string;
  description?: string;
}

interface StatsProps {
  items?: StatItemProps[] | false;
  className?: string;
}

export default function Stats({
  items = [
    {
      label: "Step 1",
      value: "Detect",
      description:
        "reducr scans prompts for repeated context, unnecessary verbosity, and bloated structure.",
    },
    {
      label: "Step 2",
      value: "Optimize",
      description:
        "A clearer, more compact prompt draft is shown before submission so users can review changes.",
    },
    {
      label: "Step 3",
      value: "Save",
      description:
        "Users understand where token waste comes from and how much they can save over time.",
    },
  ],
  className,
}: StatsProps) {
  return (
    <Section className={className} id="how-it-works">
      <div className="container mx-auto max-w-[960px]">
        {items !== false && items.length > 0 && (
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
            {items.map((item, index) => (
              <div
                key={index}
                className="animate-appear rounded-xl border border-white/10 bg-background/30 p-5 text-left opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ animationDelay: `${index * 140}ms` }}
              >
                {item.label && (
                  <div className="text-muted-foreground text-sm font-semibold">
                    {item.label}
                  </div>
                )}
                <div className="flex items-baseline gap-2">
                  <div className="from-foreground to-foreground dark:to-brand bg-linear-to-r bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_var(--brand-foreground)] transition-all duration-300 sm:text-5xl md:text-6xl">
                    {item.value}
                  </div>
                </div>
                {item.description && (
                  <div className="text-muted-foreground text-sm font-semibold text-pretty">
                    {item.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
