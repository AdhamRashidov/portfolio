import { CopyButton } from "@/utils/copyButton";
import { ThemeToggle } from "@/utils/themetoggle";
import { Button } from "@/custom/button";
import { useState, useEffect } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      // Section o'rtaga 40% kelganda uni 'active' deb hisoblaydi
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Stack", href: "#stack" },
    { name: "Contact", href: "#contact" },
  ];

  // Silliq scroll uchun qo'shimcha mantiq (JavaScript orqali zaxira)
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 64, // Header balandligini hisobga olamiz
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-xl font-bold tracking-tighter font-mono hover:opacity-80 transition-opacity"
          >
            ADHAM<span className="text-muted-foreground">.dev</span>
          </a>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`text-sm font-medium transition-all duration-300 relative py-1
                  ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}
                `}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-foreground rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center border-r pr-3 gap-1">
            <span className="text-xs text-muted-foreground font-mono">
              Email:
            </span>
            <CopyButton text={import.meta.env.VITE_EMAIL} />
          </div>
          <ThemeToggle />
          <Button
            variant="secondary"
            size="sm"
            className="hidden sm:flex h-9 rounded-xl hover:animate-out"
          >
            Resume
          </Button>
        </div>
      </nav>
    </header>
  );
};
