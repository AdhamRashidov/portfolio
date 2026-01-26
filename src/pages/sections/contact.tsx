import { Button } from "@/components/ui/button";
import { Mail, Send, MessageSquareQuote } from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 container mx-auto px-4 border-t border-border/50"
    >
      <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-primary-foreground relative overflow-hidden">
        {/* Dekorativ elementlar */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

        <div className="max-w-3xl space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">
            <MessageSquareQuote size={14} />
            <span>Keling, gaplashamiz</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter italic">
            Keyingi katta loyihangizni birga quramizmi?
          </h2>

          <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
            Men har doim yangi va qiziqarli loyihalar uchun ochiqman.
            Savollaringiz bo'lsa yoki shunchaki salom bermoqchi bo'lsangiz,
            yozing!
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-2xl font-bold gap-2"
              asChild
            >
              <a href="mailto:your@email.com">
                <Mail size={18} /> Email yuborish
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white/20 hover:bg-white/10 text-white rounded-2xl font-bold gap-2"
              asChild
            >
              <a href="https://t.me/username" target="_blank">
                <Send size={18} /> Telegram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
