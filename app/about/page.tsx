export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our Team
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the partners behind Pattern Growth
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Team Grid */}
          <div className="grid gap-8 md:gap-12 lg:gap-16">
            
            {/* William Card */}
            <div className="group">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-secondary border-2 border-border flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <svg 
                      className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 text-foreground"
                      viewBox="0 0 100 100" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="50" cy="30" r="15" stroke="currentColor" strokeWidth="2"/>
                      <path d="M35 30 Q50 40 65 30" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <circle cx="40" cy="28" r="2" fill="currentColor"/>
                      <circle cx="60" cy="28" r="2" fill="currentColor"/>
                      <path d="M30 60 Q50 80 70 60" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <rect x="44" y="35" width="3" height="3" fill="currentColor"/>
                      <rect x="48" y="35" width="3" height="3" fill="currentColor"/>
                      <rect x="52" y="35" width="3" height="3" fill="currentColor"/>
                      <rect x="44" y="39" width="3" height="3" fill="currentColor"/>
                      <rect x="48" y="39" width="3" height="3" fill="currentColor"/>
                      <rect x="52" y="39" width="3" height="3" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      William
                    </h2>
                    <p className="text-sm md:text-base font-medium text-primary uppercase tracking-wider">
                      Partner
                    </p>
                  </div>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                      William has spent his career helping growth-stage teams find structure in the chaos of growth. He believes strategy should be practical and usable, and he measures success by how confident teams feel once they own the plan.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-muted-foreground mt-4">
                      Clients know him for turning ambitious goals into frameworks that actually make sense.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-border"></div>
              </div>
            </div>

            {/* Ryan Card */}
            <div className="group">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-secondary border-2 border-border flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <svg 
                      className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 text-foreground"
                      viewBox="0 0 100 100" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="50" cy="30" r="15" stroke="currentColor" strokeWidth="2"/>
                      <path d="M35 25 Q50 15 65 25" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
                      <circle cx="40" cy="28" r="2" fill="currentColor"/>
                      <circle cx="60" cy="28" r="2" fill="currentColor"/>
                      <circle cx="40" cy="28" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <circle cx="60" cy="28" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <path d="M30 60 Q50 80 70 60" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <rect x="44" y="35" width="3" height="3" fill="currentColor"/>
                      <rect x="48" y="35" width="3" height="3" fill="currentColor"/>
                      <rect x="52" y="35" width="3" height="3" fill="currentColor"/>
                      <rect x="44" y="39" width="3" height="3" fill="currentColor"/>
                      <rect x="48" y="39" width="3" height="3" fill="currentColor"/>
                      <rect x="52" y="39" width="3" height="3" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      Ryan
                    </h2>
                    <p className="text-sm md:text-base font-medium text-primary uppercase tracking-wider">
                      Partner
                    </p>
                  </div>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                      Ryan is driven by curiosity. He is usually the one asking the question that makes everyone pause and think. His focus is on translating complex marketing challenges into clear next steps, and he has a reputation for calling out when "more campaigns" isn't really the answer.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-muted-foreground mt-4">
                      His goal is always the same: clarity that teams can run with.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 md:mt-24 pt-16 border-t border-border">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground text-center">
                Together, William and Ryan built Pattern Growth as the alternative to the CMO-for-hire model and the agency treadmill: a project-based partner for leaders who want growth strategy their teams can actually run.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
