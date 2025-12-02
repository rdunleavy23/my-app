import { cn } from "@/lib/utils";
import {
  IconTerminal2,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconAdjustmentsBolt,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Quick Wins Start Week One",
      description:
        "We start executing week one, not month three. While building your strategic foundation, you'll see immediate improvements that impact your pipeline before the sprint ends.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Growth Infrastructure You Own",
      description:
        "We build custom systems for how your business actually operates—then hand over everything. Everything we create becomes yours: frameworks, documentation, tools, insights.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Strategy Connected to Revenue",
      description:
        "Most marketing roadmaps prioritize busy work over revenue. We connect every initiative directly to revenue: what generates pipeline, what converts prospects, what drives growth you can measure.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Brand Positioning That Sells",
      description: "We clarify who you serve, why they'd choose you, and how to say it everywhere. Your positioning will work in outreach, on sales calls, in investor conversations, and throughout your customer experience.",
      icon: <IconCloud />,
    },
    {
      title: "Marketing That Drives Revenue",
      description: "Whether you have a sales team or growth happens product-led, we align your marketing to how revenue actually happens in your business. No more disconnected campaigns or vanity metrics.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Data Before Assumptions",
      description:
        "If your data is fragmented or missing, we fix that first. We don't create strategy from guesswork. You'll get clear visibility into what's working before we recommend what to change.",
      icon: <IconHelp />,
    },
    {
      title: "Built to Transfer, Not Keep You Dependent",
      description:
        "Our success metric isn't keeping you on retainer—it's you running this without us. We build custom systems and train as we go so knowledge transfers naturally. When we're done, you don't need us. Period.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Handoff That Fits How You Work",
      description: "Whether you're running lean, working with an agency, or building internal, we design the handoff for your specific situation. Complete documentation, clear processes, ongoing dashboard access.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
