import { Button } from "@/custom/button";
import {
  Mail,
  Send,
  MessageSquareQuote,
  ContactRoundIcon,
  Linkedin,
} from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 container mx-auto px-4 border-t border-border/50"
    >
      <div className="group inline-flex items-center gap-2 px-3.5 py-1 mb-7 rounded-full bg-linear-to-r from-primary/10 to-transparent border-l-2 border-primary transition-all duration-300 hover:gap-3">
        <ContactRoundIcon
          size={14}
          className="text-primary transition-transform group-hover:scale-110"
        />
        <span className="text-[12px] font-black uppercase tracking-widest text-foreground/80 group-hover:text-primary transition-colors">
          Aloqa uchun
        </span>
      </div>
      <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-primary-foreground relative overflow-hidden">
        {/* Dekorativ elementlar */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

        <div className="max-w-3xl space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">
            <MessageSquareQuote size={14} />
            <span>Keling, gaplashamiz</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter italic sm:text-balance">
            Keyingi katta loyihangizni birga quramizmi?
          </h2>

          <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed sm:text-balance">
            Men har doim yangi va qiziqarli loyihalar uchun ochiqman.
            Savollaringiz bo'lsa yoki shunchaki salom bermoqchi bo'lsangiz,
            yozing!
          </p>

          <div className="flex flex-wrap gap-4 pt-4 sm:text-balace">
            <Button
              size="md"
              variant="ghost"
              className="rounded-2xl font-bold gap-2"
              asChild
            >
              <a href="https://adhamrashidov0312@gmail.com" target="_blank">
                <Mail size={18} /> Email yuborish
              </a>
            </Button>
            <Button
              size="md"
              variant="ghost"
              className="rounded-2xl font-bold gap-2"
              asChild
            >
              <a href="https://t.me/adhamrashidov" target="_blank">
                <Send size={18} /> Telegram
              </a>
            </Button>
            <Button
              size="md"
              variant="ghost"
              className="rounded-2xl font-bold gap-2"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/adham-rashidov-979995297/"
                target="_blank"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
