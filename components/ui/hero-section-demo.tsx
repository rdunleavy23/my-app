import { HeroSection } from "@/components/ui/hero-section-with-smooth-bg-shader";

export default function HeroSectionDemo() {
  return (
    <HeroSection 
      distortion={1.2}
      speed={0.8}
      colors={["#3E5661", "#8597A1", "#95B0BA", "#02273A", "#B9A287", "#F8ECD1"]}
    />
  );
}
