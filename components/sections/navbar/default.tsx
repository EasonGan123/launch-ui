import { type VariantProps } from "class-variance-authority";
import { Menu, Sparkles } from "lucide-react";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "../../ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";
import Navigation from "../../ui/navigation";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";

interface NavbarLink {
  text: string;
  href: string;
}

interface NavbarActionProps {
  text: string;
  href: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
  isButton?: boolean;
}

interface NavbarProps {
  logo?: ReactNode;
  name?: string;
  homeUrl?: string;
  mobileLinks?: NavbarLink[];
  actions?: NavbarActionProps[];
  showNavigation?: boolean;
  customNavigation?: ReactNode;
  className?: string;
}

export default function Navbar({
  logo = (
    <div className="from-brand/90 to-brand/60 text-primary-foreground shadow-md flex size-7 items-center justify-center rounded-md bg-linear-to-br transition-transform duration-300 group-hover:scale-105">
      <Sparkles className="size-4" />
    </div>
  ),
  name = "reducr",
  homeUrl = "#",
  mobileLinks = [
    { text: "Features", href: "#features" },
    { text: "How it works", href: "#how-it-works" },
    { text: "FAQ", href: "#faq" },
  ],
  actions = [
    { text: "See How It Works", href: "#how-it-works", isButton: false },
    {
      text: "Install Extension",
      href: "#",
      isButton: true,
      variant: "default",
    },
  ],
  showNavigation = true,
  customNavigation,
  className,
}: NavbarProps) {
  return (
    <header
      className={cn(
        "animate-appear sticky top-0 z-50 -mb-4 px-4 pb-4 opacity-0",
        className,
      )}
    >
      <div className="fade-bottom bg-background/25 absolute left-0 h-24 w-full backdrop-blur-lg"></div>
      <div className="max-w-container relative mx-auto">
        <NavbarComponent className="group rounded-xl border border-white/10 bg-background/35 px-4 shadow-sm backdrop-blur-md transition-colors duration-300 hover:bg-background/45">
          <NavbarLeft>
            <a
              href={homeUrl}
              className="group flex items-center gap-2 text-xl font-semibold tracking-tight transition-opacity duration-300 hover:opacity-90"
            >
              {logo}
              {name}
            </a>
            {showNavigation && (customNavigation || <Navigation />)}
          </NavbarLeft>
          <NavbarRight>
            {actions.map((action, index) =>
              action.isButton ? (
                <Button
                  key={index}
                  variant={action.variant || "default"}
                  className="transition-all duration-300 hover:-translate-y-0.5"
                  asChild
                >
                  <a href={action.href}>
                    {action.icon}
                    {action.text}
                    {action.iconRight}
                  </a>
                </Button>
              ) : (
                <a
                  key={index}
                  href={action.href}
                  className="hidden text-sm transition-colors duration-300 hover:text-brand md:block"
                >
                  {action.text}
                </a>
              ),
            )}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="size-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <a
                    href={homeUrl}
                    className="flex items-center gap-2 text-xl font-bold"
                  >
                    <span>{name}</span>
                  </a>
                  {mobileLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {link.text}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
