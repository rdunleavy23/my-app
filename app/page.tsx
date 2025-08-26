"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="font-semibold tracking-tight">
            Pattern <span className="text-slate-500">Growth</span>
          </Link>
          <div className="hidden gap-3 sm:flex">
            <Link href="#sprint" className="text-sm text-slate-600 hover:text-slate-900">Sprint</Link>
            <Link href="#who" className="text-sm text-slate-600 hover:text-slate-900">Who</Link>
            <Link href="#compare" className="text-sm text-slate-600 hover:text-slate-900">Why Us</Link>
            <Link href="#proof" className="text-sm text-slate-600 hover:text-slate-900">Proof</Link>
            <Link href="#faq" className="text-sm text-slate-600 hover:text-slate-900">FAQ</Link>
          </div>
          <Button asChild size="sm">
            <Link href="https://cal.com/pattern-growth" target="_blank" rel="noreferrer">
              Book a Call
            </Link>
          </Button>
        </div>
      </header>

      {/* rest of the file remains unchanged */}
    </main>
  );
}

function Feature({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-slate-600">{children}</CardContent>
    </Card>
  );
}

function CaseCard({
  title,
  result,
  detail,
}: {
  title: string;
  result: string;
  detail: string;
}) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <p className="text-sm text-emerald-600">{result}</p>
      </CardHeader>
      <CardContent className="text-sm text-slate-600">{detail}</CardContent>
    </Card>
  );
}
