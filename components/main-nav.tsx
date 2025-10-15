"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { Icons } from "./icons";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <Icons.logo />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/"
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Home
        </Link>

        <Link
          target="_blank"
          href="https://www.linkedin.com/in/adityadomle/"
          className="flex items-center gap-1 text-foreground/80 transition-colors hover:text-foreground/80"
        >
          LinkedIn <ExternalLink className="h-3 w-3" />
        </Link>

        <Link
          href={siteConfig.links.resume}
          target="_blank"
          className="flex items-center gap-1 text-foreground/80 transition-colors hover:text-foreground/80"
        >
          Resume <ExternalLink className="h-3 w-3" />
        </Link>
      </nav>
    </div>
  );
}