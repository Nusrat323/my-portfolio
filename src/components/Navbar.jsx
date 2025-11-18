import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef(null);

  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  
  useEffect(() => {
    if (!navRef.current) return;

    const navLinks = navRef.current.querySelectorAll("a[data-link]");
    const activeLink = Array.from(navLinks).find(
      (link) => link.dataset.href === activeSection
    );

    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeSection]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
            : "py-5"
        )}
      >
        <div className="container relative flex items-center justify-between">
          
          <a className="text-xl font-bold z-50" href="#hero">
            Nusrat Jahan <span className="text-primary">Trisha</span>
          </a>

          
          <div
            ref={navRef}
            className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-link
                data-href={item.href.replace("#", "")}
                className="relative text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}

           
            <span
              className="absolute bottom-0 h-[2px] bg-primary transition-all duration-300"
              style={{
                left: underlineStyle.left,
                width: underlineStyle.width,
              }}
            />
          </div>

          
          <div className="flex items-center space-x-3 z-50">
            <ThemeToggle />

            <button
              onClick={() => setMenuOpen((p) => !p)}
              className="md:hidden"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

    
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center transition-all duration-300">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={28} />
          </button>

          <div className="flex flex-col space-y-12 text-2xl font-semibold">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-white hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
