import { ReactNode } from "react";

import { Badge } from "../../ui/badge";
import { Section } from "../../ui/section";

interface LogosProps {
  title?: string;
  badge?: ReactNode | false;
  logos?: ReactNode[] | false;
  className?: string;
}

export default function Logos({
  title = "Works where AI users already work",
  badge = (
    <Badge variant="outline" className="border-brand/30 text-brand">
      Compatibility
    </Badge>
  ),
  logos = [
    <Badge key="browser-extension" variant="outline">
      Browser Extension
    </Badge>,
    <Badge key="cursor" variant="outline">
      Cursor
    </Badge>,
    <Badge key="claude" variant="outline">
      Claude
    </Badge>,
    <Badge key="ai-workflows" variant="outline">
      AI Workflows
    </Badge>,
  ],
  className,
}: LogosProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 text-center">
        <div className="animate-appear flex flex-col items-center gap-6 opacity-0">
          {badge !== false && badge}
          <h2 className="text-md font-semibold sm:text-2xl">{title}</h2>
          <p className="text-muted-foreground max-w-[760px] text-sm sm:text-base">
            reducr fits into modern AI workflows in browser-based chat tools,
            Cursor, and Claude usage patterns.
          </p>
        </div>
        {logos !== false && logos.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-4">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="animate-appear opacity-0 transition-transform duration-300 hover:-translate-y-0.5"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                {logo}
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
