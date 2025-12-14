import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { path: "/collection", label: "Collection" },
    { path: "/house", label: "The House" },
    { path: "/method", label: "Method" },
    { path: "/atelier", label: "Atelier" },
    { path: "/inquiry", label: "Private Inquiry" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        isScrolled ? "bg-background/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-8 md:px-16 py-8">
        <Link
          to="/"
          className="font-editorial text-foreground text-lg tracking-[0.2em] transition-opacity duration-500 hover:opacity-70"
        >
          Ø
        </Link>

        <div className="hidden md:flex items-center gap-12">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${
                location.pathname === link.path ? "text-foreground" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button className="md:hidden text-foreground/60 hover:text-foreground transition-colors duration-500">
          <svg
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <line x1="0" y1="1" x2="20" y2="1" />
            <line x1="0" y1="11" x2="20" y2="11" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
