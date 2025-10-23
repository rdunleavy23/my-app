import { HeroSection } from "@/components/ui/hero-section-with-smooth-bg-shader";

export default function HeroSectionDemo() {
  return (
    <HeroSection 
      distortion={1.2}
      speed={0.8}
      colors={["#3b82f6", "#8b5cf6", "#06b6d4", "#10b981", "#f59e0b", "#ef4444"]}
    />
  );
}
