"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX, IconPlayerPause, IconPlayerPlay } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/theme-toggle";
import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

// --- Background Music Controller ---
let backgroundMusicController: { pause: () => void; play: () => void } | null = null;
export function setBackgroundMusicController(controller: { pause: () => void; play: () => void }) {
  backgroundMusicController = controller;
}

// --- Music Toggle Button (abstracted, similar to ModeToggle) ---
export function MusicToggle() {
  const [paused, setPaused] = useState(false);

  const handleToggle = () => {
    if (backgroundMusicController) {
      if (paused) {
        backgroundMusicController.play();
      } else {
        backgroundMusicController.pause();
      }
      setPaused(!paused);
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleToggle}
      className="w-10 h-10 rounded-full relative overflow-hidden"
      aria-label={paused ? "Play music" : "Pause music"}
      title={paused ? "Play music" : "Pause music"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {paused ? (
          <motion.div
            key="play"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <IconPlayerPlay className="h-[1.2rem] w-[1.2rem]" />
          </motion.div>
        ) : (
          <motion.div
            key="pause"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: -180 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <IconPlayerPause className="h-[1.2rem] w-[1.2rem]" />
          </motion.div>
        )}
      </AnimatePresence>
      <span className="sr-only">{paused ? "Play music" : "Pause music"}</span>
    </Button>
  );
}

// --- Navbar ---
export const Navbar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className={cn("fixed inset-x-0 top-0 z-50 w-full", className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<{ visible?: boolean }>, { visible })
          : child
      )}
    </div>
  );
};

// --- NavBody ---
export const NavBody = ({
  children,
  className,
  visible,
}: {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}) => (
  <div
    className={cn(
      "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex dark:bg-transparent transition-all duration-400 ease-out",
      visible && "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md shadow-lg transform translate-y-5 w-[min(40%,800px)]",
      className
    )}
  >
    {children}
  </div>
);

// --- NavItems ---
export const NavItems = ({
  items,
  className,
  onItemClick,
}: {
  items: { name: string; link: string }[];
  className?: string;
  onItemClick?: () => void;
}) => {
  const pathname = usePathname();
  const isActive = (path: string) => (path === "/" ? pathname === "/" : pathname.startsWith(path));
  return (
    <div className={cn("flex items-center gap-3 sm:gap-4 lg:gap-6", className)}>
      <MusicToggle />
      {items.map((item, idx) => (
        <div key={`nav-${idx}`} className="transform transition-transform duration-500 hover:scale-105 active:scale-95">
          <Link
            href={item.link}
            onClick={onItemClick}
            className={`text-sm sm:text-md lg:text-lg font-[family-name:var(--font-instrument-serif)] hover:opacity-80 hover:underline transition-opacity duration-200 ${
              isActive(item.link) ? "opacity-100" : "opacity-60"
            }`}
          >
            {item.name}
          </Link>
        </div>
      ))}
      <div className="transform transition-transform duration-400 hover:scale-105 active:scale-95">
        <ModeToggle />
      </div>
    </div>
  );
};

// --- MobileNav ---
export const MobileNav = ({
  children,
  className,
  visible,
}: {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}) => (
  <div
    className={cn(
      "relative z-50 mx-auto flex w-full flex-col items-center justify-between bg-transparent px-4 py-3 lg:hidden transition-all duration-400 ease-out",
      visible && "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md shadow-lg transform translate-y-5 w-[calc(100%-2rem)] mx-4 rounded-2xl",
      className
    )}
  >
    {children}
  </div>
);

// --- MobileNavHeader ---
export const MobileNavHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex w-full flex-row items-center justify-between", className)}>{children}</div>
);

// --- MobileNavMenu ---
export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}) =>
  isOpen ? (
    <div
      className={cn(
        "absolute left-4 right-4 top-full mt-2 z-50 flex w-auto flex-col items-start justify-start gap-4 rounded-xl bg-white/95 backdrop-blur-md px-6 py-6 shadow-lg dark:bg-neutral-950/95 transition-all duration-450 ease-out opacity-100 transform translate-y-0",
        className
      )}
    >
      {children}
    </div>
  ) : null;

// --- MobileNavToggle ---
export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-400 hover:scale-105 active:scale-95"
  >
    {isOpen ? (
      <IconX className="w-5 h-5 text-black dark:text-white" />
    ) : (
      <IconMenu2 className="w-5 h-5 text-black dark:text-white" />
    )}
  </button>
);

// --- NavbarLogo ---
export const NavbarLogo = () => (
  <div className="transform transition-transform duration-400 hover:scale-105 active:scale-95">
    <Link
      href="/"
      className="text-lg sm:text-xl font-[family-name:var(--font-instrument-serif)] font-medium hover:opacity-80 hover:underline transition-opacity duration-200"
    >
      Dilpreet
    </Link>
  </div>
);

// --- NavbarButton ---
export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (React.ComponentPropsWithoutRef<"a"> | React.ComponentPropsWithoutRef<"button">)) => {
  const baseStyles =
    "px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";
  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};