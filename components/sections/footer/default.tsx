import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "../../ui/footer";
import { ModeToggle } from "../../ui/mode-toggle";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
}

export default function FooterSection({
  logo = (
    <div className="from-brand/90 to-brand/60 text-primary-foreground shadow-md flex size-8 items-center justify-center rounded-md bg-linear-to-br text-sm font-semibold">
      r
    </div>
  ),
  name = "reducr",
  columns = [
    {
      title: "Product",
      links: [
        { text: "Install Extension", href: "#" },
        { text: "How it works", href: "#how-it-works" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", href: "#" },
        { text: "Contact", href: siteConfig.links.email },
        { text: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Workflows",
      links: [
        { text: "Browser Extension", href: "#" },
        { text: "Cursor", href: "#" },
        { text: "Claude", href: "#" },
      ],
    },
  ],
  copyright = "© 2026 reducr. All rights reserved.",
  policies = [
    { text: "Privacy Policy", href: "#" },
    { text: "Terms of Service", href: "#" },
  ],
  showModeToggle = true,
  className,
}: FooterProps) {
  return (
    <footer className={cn("bg-background animate-appear w-full px-4 opacity-0", className)}>
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent className="rounded-2xl border border-white/10 bg-background/35 p-6 backdrop-blur-md">
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="group flex items-center gap-2">
                {logo}
                <h3 className="text-xl font-semibold tracking-tight">{name}</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Reduce AI token usage with clean, reversible prompt optimization.
              </p>
            </FooterColumn>
            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="text-muted-foreground text-sm transition-colors duration-300 hover:text-brand"
                  >
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom>
            <div>{copyright}</div>
            <div className="flex items-center gap-4">
              {policies.map((policy, index) => (
                <a
                  key={index}
                  href={policy.href}
                  className="transition-colors duration-300 hover:text-brand"
                >
                  {policy.text}
                </a>
              ))}
              {showModeToggle && <ModeToggle />}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
