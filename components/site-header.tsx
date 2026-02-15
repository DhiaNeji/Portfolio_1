"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { FiMusic } from "react-icons/fi";

import { siteConfig } from "@/config/site";
import { Button } from "./ui/button";
import { ModeSwitcher } from "./mode-switcher";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { CommandMenu } from "./command-menu";
import { Icons } from "./icons";

export function SiteHeader() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);



  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };



  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-13 items-center">
          {/* Logo/Name - Left */}
          <MainNav />

          {/* Mobile Nav */}
          <MobileNav toggleMusic={toggleMusic} playing={playing} />

          {/* Desktop Nav - Right */}
          <div className="ml-auto flex items-center gap-2 md:gap-3">
            {/* Command Menu - Hidden on mobile */}
            <div className="hidden md:block">
              <CommandMenu />
            </div>


            {/* Action Buttons */}
            <div className="flex items-center gap-1">
              {/* Music Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full transition-all hover:scale-105 hover:bg-muted"
                onClick={toggleMusic}
                title={playing ? "Pause Music" : "Play Music"}
              >
                <FiMusic
                  className={`h-[18px] w-[18px] transition-colors ${
                    playing ? "text-pink-500" : "text-muted-foreground"
                  }`}
                />
              </Button>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full transition-all hover:scale-105 hover:bg-muted"
                asChild
              >
                <div>
                  <ModeSwitcher className="h-[18px] w-[18px]" />
                </div>
              </Button>

              {/* GitHub */}
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full transition-all hover:scale-105 hover:bg-muted"
                asChild
              >
                <Link 
                  href={siteConfig.links.github} 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <Icons.gitHub className="h-[18px] w-[18px]" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Persistent Audio */}
      <audio ref={audioRef} src="/music/theme.mp3" loop preload="auto" />
    </header>
  );
}