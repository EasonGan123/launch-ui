import {
  BlocksIcon,
  BarChart3Icon,
  ScanSearchIcon,
  ShieldCheckIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription, ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "Optimize prompts without changing your workflow",
  items = [
    {
      title: "Reduce token waste",
      description:
        "Remove bloated prompts, repeated context, and unnecessary verbosity before requests are sent.",
      icon: <ScanSearchIcon className="size-5 stroke-1" />,
    },
    {
      title: "Built for AI users",
      description:
        "Designed for people using Cursor, Claude, and browser-based AI tools every day.",
      icon: <BlocksIcon className="size-5 stroke-1" />,
    },
    {
      title: "Keep optimization visible",
      description:
        "See clearer, more compact prompt versions before sending so token waste is easy to spot.",
      icon: <ShieldCheckIcon className="size-5 stroke-1" />,
    },
    {
      title: "Stay in control",
      description:
        "Optimization is simple, visible, and reversible, so quality stays intact while costs drop over time.",
      icon: <BarChart3Icon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className} id="features">
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="animate-appear max-w-[560px] text-center text-3xl leading-tight font-semibold opacity-0 sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {items.map((item, index) => (
              <Item
                key={index}
                className="group animate-appear rounded-xl border border-white/10 bg-background/35 opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <ItemTitle className="flex items-center gap-2 transition-colors duration-300 group-hover:text-brand">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
