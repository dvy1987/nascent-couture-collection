import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { collectionPieces } from "@/data/collection";

const PieceDetail = () => {
  const { slug } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  
  const piece = collectionPieces.find((p) => p.slug === slug);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  if (!piece) {
    return (
      <main className="bg-background min-h-screen">
        <Navigation />
        <div className="pt-40 px-8 md:px-16">
          <p className="text-muted-foreground">Piece not found.</p>
          <Link to="/collection" className="link-minimal mt-8 inline-block">
            Return to collection
          </Link>
        </div>
      </main>
    );
  }

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(piece.price);

  return (
    <main className="bg-background min-h-screen">
      <Navigation />

      <div className="grid md:grid-cols-2 min-h-screen">
        {/* Image - Full bleed */}
        <div
          className={`relative h-screen md:sticky md:top-0 transition-opacity duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={piece.image}
            alt={piece.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-24 md:py-0">
          <div
            className={`max-w-md transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Edition */}
            <span className="edition-badge block mb-4">{piece.edition}</span>

            {/* Name */}
            <h1 className="font-editorial text-foreground text-2xl md:text-3xl tracking-[0.06em] mb-8">
              {piece.name}
            </h1>

            {/* Fragmented description */}
            <p className="text-fragment text-sm mb-12 leading-loose">
              {piece.description}
            </p>

            {/* Material & Craft */}
            <div className="space-y-4 mb-12 border-t border-border/30 pt-8">
              <div>
                <span className="text-muted-foreground text-xs tracking-[0.15em] uppercase block mb-1">
                  Material
                </span>
                <p className="text-foreground/80 text-sm">{piece.material}</p>
              </div>
              <div>
                <span className="text-muted-foreground text-xs tracking-[0.15em] uppercase block mb-1">
                  Provenance
                </span>
                <p className="text-foreground/80 text-sm">{piece.provenance}</p>
              </div>
            </div>

            {/* Price & CTA */}
            <div className="border-t border-border/30 pt-8">
              <span className="font-editorial text-foreground text-xl tracking-[0.04em] block mb-8">
                {formattedPrice}
              </span>
              
              <button className="btn-ceremonial w-full text-center mb-4">
                Acquire
              </button>
              
              <Link
                to="/inquiry"
                className="link-minimal block text-center mt-6"
              >
                Private inquiry
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PieceDetail;
