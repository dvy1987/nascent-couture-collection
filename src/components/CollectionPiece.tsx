import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Piece } from "@/data/collection";

interface CollectionPieceProps {
  piece: Piece;
  index: number;
}

const CollectionPiece = ({ piece, index }: CollectionPieceProps) => {
  const [isInView, setIsInView] = useState(false);
  const [showMeta, setShowMeta] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const metaTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = () => {
    metaTimeoutRef.current = setTimeout(() => {
      setShowMeta(true);
    }, 600); // Metadata appears only on pause
  };

  const handleMouseLeave = () => {
    if (metaTimeoutRef.current) {
      clearTimeout(metaTimeoutRef.current);
    }
    setShowMeta(false);
  };

  // Alternating alignment
  const alignment = index % 2 === 0 ? "items-start pl-8 md:pl-24" : "items-end pr-8 md:pr-24";

  return (
    <div
      ref={ref}
      className={`min-h-screen flex flex-col justify-center ${alignment} py-24`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={`/piece/${piece.slug}`}
        className={`group relative max-w-2xl transition-fabric-slow ${
          isInView ? "sharpen" : "recede"
        }`}
      >
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={piece.image}
            alt={piece.name}
            className="w-full h-auto object-cover transition-transform duration-1000 ease-in-out group-hover:scale-[1.02]"
          />
          
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-700" />
        </div>

        {/* Metadata - appears on pause/focus */}
        <div
          className={`mt-8 transition-all duration-700 ease-in-out ${
            showMeta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="edition-badge block mb-2">{piece.edition}</span>
          <h2 className="font-editorial text-foreground text-xl tracking-[0.06em] mb-4">
            {piece.name}
          </h2>
          <span className="link-minimal">View piece</span>
        </div>
      </Link>
    </div>
  );
};

export default CollectionPiece;
