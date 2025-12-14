import Navigation from "@/components/Navigation";
import CollectionPiece from "@/components/CollectionPiece";
import { collectionPieces } from "@/data/collection";

const Collection = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      
      {/* Collection Header */}
      <section className="pt-40 pb-20 px-8 md:px-16">
        <div className="max-w-xl">
          <span className="edition-badge block mb-4">Collection 01</span>
          <h1 className="font-editorial text-foreground text-3xl md:text-4xl tracking-[0.06em] mb-6">
            What remained.
          </h1>
          <p className="text-fragment text-sm leading-loose">
            Variations accumulated.<br />
            Some collapsed.<br />
            These persisted.
          </p>
        </div>
      </section>

      {/* Collection Pieces - One per viewport */}
      <section>
        {collectionPieces.map((piece, index) => (
          <CollectionPiece key={piece.id} piece={piece} index={index} />
        ))}
      </section>

      {/* Footer area */}
      <footer className="py-32 px-8 md:px-16 border-t border-border/30">
        <p className="text-muted-foreground text-xs tracking-[0.15em] uppercase">
          Each piece numbered. Provenance documented.
        </p>
      </footer>
    </main>
  );
};

export default Collection;
