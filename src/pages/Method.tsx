import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";

const Method = () => {
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
            How we discover
          </h1>

          {/* Method - No steps, no diagrams, manifesto-like */}
          <div className="space-y-20 text-fragment">
            <p className="text-lg md:text-xl leading-relaxed">
              Variations accumulate.
            </p>

            <p className="text-base leading-loose opacity-70">
              Some collapse.
            </p>

            <p className="text-base leading-loose opacity-70">
              What remains<br />
              is made real.
            </p>

            <div className="h-px bg-border/30 w-32" />

            <p className="text-base leading-loose opacity-70">
              The constraint is not limitation.<br />
              The constraint is form.
            </p>

            <p className="text-base leading-loose opacity-70">
              Pressure applied to material.<br />
              Pressure applied to silhouette.<br />
              Pressure applied to expectation.
            </p>

            <div className="h-px bg-border/30 w-32" />

            <p className="text-lg md:text-xl leading-relaxed">
              Deviation as method.<br />
              Selection as refinement.
            </p>

            <p className="text-base leading-loose opacity-70">
              Each edition carries<br />
              the memory of alternatives<br />
              that did not survive.
            </p>
          </div>

          {/* Abstract visual element - subtle line form */}
          <div className="mt-32 flex justify-center">
            <svg
              width="200"
              height="120"
              viewBox="0 0 200 120"
              fill="none"
              className="opacity-20"
            >
              <path
                d="M10 100 Q 50 10, 100 60 T 190 20"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-foreground"
              />
              <path
                d="M10 80 Q 60 20, 100 50 T 190 40"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-foreground"
              />
              <path
                d="M10 60 Q 70 30, 100 40 T 190 60"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-foreground"
              />
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Method;
