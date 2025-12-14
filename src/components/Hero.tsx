import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-garment.jpg";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Garment emerges first
    const loadTimer = setTimeout(() => setIsLoaded(true), 300);
    // Copy appears late
    const textTimer = setTimeout(() => setShowText(true), 1800);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Garment Image - Emerges from darkness */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-1200 ease-in-out ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"
        }`}
      >
        <img
          src={heroImage}
          alt="Draped garment emerging from darkness"
          className="h-full w-full object-cover object-center"
        />
        {/* Gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      {/* Copy - Appears late */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-end pb-32 md:pb-40 transition-all duration-1000 ease-in-out ${
          showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Collection indicator */}
        <span className="edition-badge mb-6 opacity-0 animate-fade-delayed delay-500">
          Collection 01
        </span>

        {/* Main headline */}
        <h1 className="font-editorial text-foreground text-3xl md:text-5xl lg:text-6xl tracking-[0.08em] mb-2">
          Not designed.
        </h1>
        <p className="font-editorial text-foreground/80 text-2xl md:text-4xl lg:text-5xl tracking-[0.08em] italic mb-12">
          Discovered.
        </p>

        {/* CTA */}
        <Link to="/collection" className="btn-ceremonial">
          Enter
        </Link>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-1000 ${
          showText ? "opacity-40" : "opacity-0"
        }`}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-foreground/40 to-foreground/60 animate-drift" />
      </div>
    </section>
  );
};

export default Hero;
