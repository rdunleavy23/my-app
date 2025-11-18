"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { trackGenerateLead } from "@/lib/analytics";
import { CalBookingModal } from "@/components/cal-booking-modal";

interface GetStartedButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  size?: "sm" | "lg";
  location?: 'hero' | 'content' | 'footer'; // Where the button appears
  useModal?: boolean; // Option to use modal vs new tab
}

export function GetStartedButton({
  onClick,
  className = "",
  children = "Schedule a Call",
  size = "lg",
  location = "content",
  useModal = true // Default to modal for better conversion
}: GetStartedButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    // Track lead generation intent with GA4 recommended event
    trackGenerateLead({
      currency: 'USD',
      value: 500, // Estimated value of B2B consulting lead
      method: 'schedule_call_button',
      button_location: location,
      button_text: typeof children === 'string' ? children : 'Schedule a Call',
      destination_url: 'https://cal.com/pattern-growth/30min',
    });

    if (onClick) {
      onClick();
    } else if (useModal) {
      // Open modal (recommended for higher conversion)
      setIsModalOpen(true);
    } else {
      // Fallback: open in new tab
      window.open("https://cal.com/pattern-growth/30min", "_blank", "noopener,noreferrer");
    }
  };

  const isSmall = size === "sm";

  return (
    <>
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

      {/* Cal.com booking modal */}
      {useModal && (
        <CalBookingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onBookingSuccess={(bookingId) => {
            console.log('Booking successful:', bookingId);
          }}
        />
      )}
    </>
  );
}
