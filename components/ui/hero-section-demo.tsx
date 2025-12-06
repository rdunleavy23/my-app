import { HeroSection } from "@/components/ui/hero-section-with-smooth-bg-shader";

export default function HeroSectionDemo() {
  return (
    <HeroSection 
      distortion={1.2}
      speed={0.8}
      colors={[
        "var(--primary)",
        "var(--accent-mid-blue)",
        "var(--secondary)",
        "var(--accent-deep-navy)",
        "var(--accent-warm-taupe)",
        "var(--tertiary)",
      ]}
    />
  );
}
