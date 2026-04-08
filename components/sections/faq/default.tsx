import { ReactNode } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Questions and Answers",
  items = [
    {
      question: "What does reducr do?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          reducr helps reduce token usage by cleaning up bloated prompts,
          repeated instructions, and unnecessary context before a request is
          sent.
        </p>
      ),
    },
    {
      question: "Who is reducr built for?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[600px]">
          reducr is built for AI users who rely on tools like Cursor, Claude,
          and browser-based chat workflows.
        </p>
      ),
    },
    {
      question: "How does reducr reduce costs?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          By removing prompt bloat and repeated context before sending, reducr
          lowers token usage and reduces spend over time.
        </p>
      ),
    },
    {
      question: "Can I review changes before sending?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[580px]">
          Yes. reducr is designed to keep optimization simple, visible, and
          reversible, so users stay in control.
        </p>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className} id="faq">
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="animate-appear text-center text-3xl font-semibold opacity-0 sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion
            type="single"
            collapsible
            className="animate-appear w-full max-w-[800px] rounded-xl border border-white/10 bg-background/35 px-4 opacity-0 backdrop-blur-sm"
            style={{ animationDelay: "120ms" }}
          >
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
