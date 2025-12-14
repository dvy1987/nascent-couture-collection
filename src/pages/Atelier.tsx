import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";

const Atelier = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <main className="bg-background min-h-screen">
      <Navigation />

      <section className="pt-40 pb-32 px-8 md:px-16 lg:px-32 min-h-screen flex items-center">
        <div
          className={`max-w-xl mx-auto text-center transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="edition-badge block mb-8">Coming</span>

          <h1 className="font-editorial text-foreground text-3xl md:text-4xl tracking-[0.06em] mb-12">
            Atelier
          </h1>

          {/* Teaser text - withholding as strategy */}
          <div className="space-y-8 text-fragment mb-16">
            <p className="text-base leading-loose opacity-70">
              Where authorship becomes possible.
            </p>

            <p className="text-sm leading-loose opacity-50">
              Proximity. Not understanding.<br />
              Invitation. Not instruction.
            </p>
          </div>

          {/* Email capture */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
              <div className="border-b border-border/40 pb-2 mb-8">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full bg-transparent text-foreground text-sm tracking-wider placeholder:text-muted-foreground/50 focus:outline-none"
                  required
                />
              </div>
              <button type="submit" className="btn-ceremonial">
                Join the Atelier
              </button>
            </form>
          ) : (
            <p className="text-fragment text-sm opacity-70">
              Noted.
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Atelier;
