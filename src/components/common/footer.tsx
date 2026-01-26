import { Github, Instagram, Linkedin, Mail, Origami, Send } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={18} />,
      href: `https://${import.meta.env.VITE_GITHUB}`,
      label: "GitHub",
    },
    {
      icon: <Linkedin size={18} />,
      href: `https://${import.meta.env.VITE_LINKEDIN}`,
      label: "LinkedIn",
    },
    {
      icon: <Send size={18} />,
      href: `https://${import.meta.env.VITE_TELEGRAM}`,
      label: "Telegram",
    },
    {
      icon: <Instagram size={18} />,
      href: `https://${import.meta.env.VITE_INSTAGRAM}`,
      label: "instagram",
    },
    {
      icon: <Origami size={18} />,
      href: `https://${import.meta.env.VITE_FREELANCER}`,
      label: "Freelancer",
    },
    {
      icon: <Mail size={18} />,
      href: `https://${import.meta.env.VITE_EMAIL}`,
      label: "Mail",
    },
  ];

  return (
    <footer className="border-t border-border bg-muted/30 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Copyright */}
          <div className="text-sm text-muted-foreground order-2 md:order-1">
            © {currentYear} Created with 🤍 by AdhamRashidov. Built with React &
            Tailwind.
          </div>

          {/* Right: Socials */}
          <div className="flex items-center gap-5 order-1 md:order-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
