"use client"

import { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";

interface CalBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  calLink?: string;
  onBookingSuccess?: (bookingId: string) => void;
}

export function CalBookingModal({
  isOpen,
  onClose,
  calLink = "pattern-growth/30min",
  onBookingSuccess
}: CalBookingModalProps) {

  useEffect(() => {
    if (!isOpen) return;

    (async function () {
      const cal = await getCalApi();

      // Track booking completion
      cal("on", {
        action: "bookingSuccessful",
        callback: (e) => {
          const bookingId = (e.detail?.data?.booking as any)?.uid || (e.detail?.data?.booking as any)?.id || 'unknown';

          // Track completed booking with GA4 recommended 'purchase' event
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'purchase', {
              currency: 'USD',
              value: 500, // Actual booking completed
              transaction_id: bookingId,
              items: [{
                item_id: 'consultation',
                item_name: '30min Strategy Call',
                price: 500,
                quantity: 1,
              }]
            });
          }

          // Callback for parent component
          if (onBookingSuccess) {
            onBookingSuccess(bookingId);
          }

          // Close modal after successful booking
          setTimeout(() => {
            onClose();
          }, 2000); // Give user time to see confirmation
        },
      });

      // Track modal close
      cal("on", {
        action: "__closeIframe",
        callback: () => {
          onClose();
        },
      });
    })();
  }, [isOpen, onClose, onBookingSuccess]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-background rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background text-foreground hover:text-primary transition-colors backdrop-blur-sm"
          aria-label="Close booking modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Screen reader title */}
        <h2 id="booking-modal-title" className="sr-only">
          Schedule a Call with Pattern Growth
        </h2>

        {/* Cal.com embed */}
        <div className="w-full h-[80vh] overflow-auto">
          <Cal
            calLink={calLink}
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{
              layout: 'month_view',
              theme: 'auto',
            }}
          />
        </div>
      </div>
    </div>
  );
}
