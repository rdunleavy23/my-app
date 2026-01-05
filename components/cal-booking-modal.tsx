"use client"

import { useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
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
  onBookingSuccess,
}: CalBookingModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const lockBodyScroll = useCallback((lock: boolean) => {
    if (typeof document === "undefined") return;
    if (lock) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, []);

  useEffect(() => {
    if (!isOpen) {
      lockBodyScroll(false);
      return;
    }

    lockBodyScroll(true);
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }

    (async function () {
      try {
        const cal = await getCalApi();

        cal("on", {
          action: "bookingSuccessful",
          callback: (e) => {
            const bookingId =
              (e.detail?.data?.booking as any)?.uid ||
              (e.detail?.data?.booking as any)?.id ||
              "unknown";

            if (typeof window !== "undefined" && window.gtag) {
              window.gtag("event", "purchase", {
                currency: "USD",
                value: 500,
                transaction_id: bookingId,
                items: [
                  {
                    item_id: "consultation",
                    item_name: "30min Strategy Call",
                    price: 500,
                    quantity: 1,
                  },
                ],
              });
            }

            if (onBookingSuccess) {
              onBookingSuccess(bookingId);
            }

            setTimeout(() => {
              onClose();
            }, 2000);
          },
        });

        cal("on", {
          action: "__closeIframe",
          callback: () => {
            onClose();
          },
        });
      } catch (error) {
        console.error("Error loading Cal.com API:", error);
      }
    })();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement as HTMLElement;

        if (event.shiftKey && active === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && active === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      lockBodyScroll(false);
    };
  }, [isOpen, onClose, onBookingSuccess, lockBodyScroll]);

  if (!isOpen) return null;

  // Render modal in a portal at document root to escape stacking contexts
  if (typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center bg-black/95 backdrop-blur-md overflow-y-auto py-8 px-4 sm:px-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div
        ref={dialogRef}
        className="relative w-full max-w-4xl bg-background rounded-lg shadow-2xl my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-[210] p-2 rounded-full bg-muted hover:bg-muted/80 text-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          aria-label="Close booking modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
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

        <h2 id="booking-modal-title" className="sr-only">
          Schedule a Call with Pattern Growth
        </h2>

        <div ref={containerRef}>
          <Cal
            calLink={calLink}
            style={{
              width: "100%",
              height: "min(80vh, 700px)",
              minHeight: "520px",
            }}
            config={{
              layout: "month_view",
              theme: "auto",
            }}
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
