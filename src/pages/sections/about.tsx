

import { fetchRepos, fetchAllRepos } from "@/hooks/gitHubService";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Github,
  Star,
  ExternalLink,
  BookMarked,
  Loader2,
  User,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";

export const About = () => {
  // 1. Oxirgi 6 ta reponi olish (Sahifa yuklanganda avtomatik ishlaydi)
  const { data: topRepos, isLoading: isTopLoading } = useQuery({
    queryKey: ["github-top-repos"],
    queryFn: fetchRepos,
    staleTime: 1000 * 60 * 60, // 1 soat kesh
  });

  // 2. Hamma repolarni olish (Faqat Sheet ochilganda getAllRepos chaqiriladi)
  const {
    data: allRepos,
    refetch: getAllRepos,
    isLoading: isAllLoading,
  } = useQuery({
    queryKey: ["all-github-repos"],
    queryFn: fetchAllRepos,
    enabled: false, // Avtomatik yuklanish o'chirilgan
  });

  return (
    <section id="about" className="py-20 container mx-auto px-4 space-y-16">
      {/* 1. Shaxsiy ma'lumotlar (Bio) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-bold uppercase tracking-wider">
            <User size={14} />
            <span>Men haqimda</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight italic lg:text-5xl">
            Murakkablikni soddalikka <br /> aylantiruvchi dasturchi.
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl">
            Salom! Men{" "}
            <span className="text-foreground font-semibold">
              Full-stack dasturchiman
            </span>
            . Mening asosiy maqsadim — nafaqat ishlaydigan, balki
            foydalanuvchiga zavq beradigan, toza kod va zamonaviy arxitekturaga
            asoslangan raqamli mahsulotlar yaratish.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl">
            Node.js backend tizimlari va React frontend ekotizimida ishlash
            tajribasiga egaman. Doimo yangi texnologiyalarni o'rganish va ularni
            real loyihalarda qo'llashga intilaman.
          </p>
        </div>

        {/* Vizual qism (ixtiyoriy rasm yoki dekoratsiya uchun joy) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 rounded-3xl bg-linear-to-br from-primary/20 to-secondary border border-border flex items-center justify-center overflow-hidden shadow-2xl">
            <Github
              size={120}
              className="text-primary/20 absolute -bottom-4 -right-4 rotate-12"
            />
            <div className="text-center space-y-2 p-6">
              <span className="text-5xl font-bold font-mono">50+</span>
              <p className="text-xs uppercase tracking-[0.2em] font-medium opacity-70">
                GitHub Repos
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-border/50" />

      {/* 2. GitHub Faolligi (Repos Grid) */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Github className="w-5 h-5 text-primary" />
              <h3 className="text-2xl font-bold italic">GitHub Faolligi</h3>
            </div>
            <p className="text-sm text-muted-foreground font-mono">
              Oxirgi yangilangan loyihalarim
            </p>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="font-mono text-xs rounded-xl border-primary/20 hover:bg-primary/5"
                onClick={() => getAllRepos()}
              >
                Barcha repolarni ko'rish
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md overflow-y-auto border-l border-border">
              <SheetHeader className="mb-6">
                <SheetTitle className="font-mono italic text-2xl">
                  Repositories
                </SheetTitle>
                <SheetDescription>
                  GitHub profilingizdagi barcha ochiq repozitoriyalar ro'yxati.
                </SheetDescription>
              </SheetHeader>
              <div className="space-y-3">
                {isAllLoading ? (
                  <div className="flex flex-col items-center justify-center py-24 gap-3">
                    <Loader2 className="animate-spin text-primary" size={32} />
                    <span className="text-xs font-mono animate-pulse text-muted-foreground">
                      Ma'lumotlar yuklanmoqda...
                    </span>
                  </div>
                ) : (
                  allRepos?.map((repo: any) => (
                    <a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-start justify-between p-4 border border-border rounded-xl hover:bg-muted/50 transition-all active:scale-[0.98]"
                    >
                      <div className="space-y-1.5">
                        <p className="font-semibold text-sm group-hover:text-primary transition-colors italic">
                          {repo.name}
                        </p>
                        <div className="flex items-center gap-3 text-[10px] text-muted-foreground uppercase font-mono font-bold">
                          <span className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-primary/40" />
                            {repo.language || "Other"}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star size={10} className="text-yellow-500" />{" "}
                            {repo.stargazers_count}
                          </span>
                        </div>
                      </div>
                      <ExternalLink
                        size={14}
                        className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </a>
                  ))
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Top Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isTopLoading
            ? Array(6)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="h-44 rounded-2xl bg-muted/40 animate-pulse border border-border"
                  />
                ))
            : topRepos?.map((repo: any) => (
                <div
                  key={repo.id}
                  className="group relative p-6 border border-border rounded-2xl bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2.5 bg-primary/5 rounded-xl border border-primary/10">
                      <BookMarked className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-muted-foreground bg-muted/50 px-2 py-1 rounded-lg">
                      <Star
                        size={13}
                        className="text-yellow-500 fill-yellow-500"
                      />{" "}
                      {repo.stargazers_count}
                    </div>
                  </div>

                  <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-1 italic">
                    {repo.name}
                  </h4>

                  <p className="text-sm text-muted-foreground line-clamp-2 mb-6 h-10 leading-relaxed">
                    {repo.description ||
                      "Ushbu loyiha uchun qisqacha tavsif (README) yozilmagan."}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 bg-secondary text-secondary-foreground rounded-lg uppercase tracking-wider border border-border/50">
                      {repo.language || "Project"}
                    </span>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold hover:text-primary transition-colors group/link"
                    >
                      GitHub{" "}
                      <ExternalLink
                        size={12}
                        className="group-hover/link:translate-x-0.5 transition-transform"
                      />
                    </a>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};
