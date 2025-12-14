import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";

const Inquiry = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.message) {
      setIsSubmitted(true);
    }
  };

  return (
    <main className="bg-background min-h-screen">
      <Navigation />

      <section className="pt-40 pb-32 px-8 md:px-16 lg:px-32">
        <div
          className={`max-w-lg mx-auto transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="font-editorial text-foreground text-3xl md:text-4xl tracking-[0.06em] mb-8">
            Private Inquiry
          </h1>

          <p className="text-fragment text-sm mb-16 opacity-70">
            For acquisition, bespoke commissions,<br />
            or private appointments.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="border-b border-border/40 pb-2">
                <label className="text-muted-foreground text-xs tracking-[0.15em] uppercase block mb-3">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-transparent text-foreground text-sm tracking-wider focus:outline-none"
                />
              </div>

              <div className="border-b border-border/40 pb-2">
                <label className="text-muted-foreground text-xs tracking-[0.15em] uppercase block mb-3">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-transparent text-foreground text-sm tracking-wider focus:outline-none"
                  required
                />
              </div>

              <div className="border-b border-border/40 pb-2">
                <label className="text-muted-foreground text-xs tracking-[0.15em] uppercase block mb-3">
                  Inquiry
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full bg-transparent text-foreground text-sm tracking-wider focus:outline-none resize-none"
                  required
                />
              </div>

              <button type="submit" className="btn-ceremonial">
                Submit inquiry
              </button>
            </form>
          ) : (
            <div className="text-fragment">
              <p className="text-base opacity-70 mb-4">Received.</p>
              <p className="text-sm opacity-50">
                We will respond within 48 hours.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Inquiry;
