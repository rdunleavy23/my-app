"use client"

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface GetStartedButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  size?: "sm" | "lg";
}

export function GetStartedButton({ 
  onClick, 
  className = "",
  children = "Schedule a Call",
  size = "lg"
}: GetStartedButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default action - open calendar link
      window.open("https://cal.com/pattern-growth/30min", "_blank", "noopener,noreferrer");
    }
  };

  const isSmall = size === "sm";
  
  return (
    <Button 
      variant="accent"
      className={`group relative overflow-hidden btn-hover-lift shadow-md shadow-accent-deep-navy/20 hover:shadow-lg hover:shadow-accent-deep-navy/30 ${className}`} 
      size={size}
      onClick={handleClick}
    >
      <span className={`transition-opacity duration-500 group-hover:opacity-0 ${isSmall ? 'mr-6' : 'mr-8'}`}>
        {children}
      </span>
      <i className={`absolute right-1 top-1 bottom-1 rounded-sm z-10 grid place-items-center transition-all duration-500 bg-accent-deep-navy-foreground/10 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95 text-accent-deep-navy-foreground ${isSmall ? 'w-1/5' : 'w-1/4'}`}>
        <ChevronRight size={isSmall ? 14 : 16} strokeWidth={2} aria-hidden="true" />
      </i>
    </Button>
  );
}
