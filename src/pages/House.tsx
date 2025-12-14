import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";

const House = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-background min-h-screen">
      <Navigation />

      <section className="pt-40 pb-32 px-8 md:px-16 lg:px-32">
        <div
          className={`max-w-2xl mx-auto transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="font-editorial text-foreground text-3xl md:text-4xl tracking-[0.06em] mb-20">
            The House
          </h1>

          {/* Manifesto - Fragmented, declarative */}
          <div className="space-y-16 text-fragment">
            <p className="text-lg md:text-xl leading-relaxed">
              Form emerges through constraint.
            </p>

            <p className="text-base leading-loose opacity-70">
              We do not design garments.<br />
              We establish conditions<br />
              under which forms reveal themselves.
            </p>

            <div className="h-px bg-border/30 w-24" />

            <p className="text-base leading-loose opacity-70">
              Variations accumulate.<br />
              Pressure refines.<br />
              Selection determines what persists.
            </p>

            <p className="text-base leading-loose opacity-70">
              Each piece carries the trace<br />
              of its own becoming.
            </p>

            <div className="h-px bg-border/30 w-24" />

            <p className="text-lg md:text-xl leading-relaxed">
              The wearer completes the work.
            </p>
          </div>

          {/* Atelier reference */}
          <div className="mt-32 pt-12 border-t border-border/30">
            <span className="edition-badge block mb-4">Atelier</span>
            <p className="text-muted-foreground text-sm leading-loose mb-8">
              Where the work continues.
            </p>
            <a href="/atelier" className="link-minimal">
              Learn more
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default House;
