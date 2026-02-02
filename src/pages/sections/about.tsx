import { fetchRepos, fetchAllRepos } from "@/hooks/gitHubService";
import { Button } from "@/custom/button";
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
  Loader2,
  User,
  Code2,
  ArrowUpRight,
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
          <div className="group inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-linear-to-r from-primary/10 to-transparent border-l-2 border-primary transition-all duration-300 hover:gap-3">
            <User
              size={14}
              className="text-primary transition-transform group-hover:scale-110"
            />
            <span className="text-[12px] font-black uppercase tracking-widest text-foreground/80 group-hover:text-primary transition-colors">
              O'zim haqimda
            </span>
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
            real loyihalarda qo'llashga intilaman. Feedbacklarga har doim
            ochiqman.
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
            <div className="flex items-center gap-1">
              <div className="p-1 rounded-full bg-primary">
                <Github
                  size={20}
                  strokeWidth={2.5}
                  fill="currentColor"
                  className="text-primary-foreground"
                />
              </div>
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
                    className="h-56 rounded-2xl bg-muted/20 animate-pulse border border-border/50"
                  />
                ))
            : topRepos?.map((repo: any) => {
                console.log(repo, ".......");
                return (
                  <div
                    key={repo.id}
                    className="group relative p-6 border border-primary/10 rounded-2xl bg-linear-to-br from-card to-background hover:border-primary/40 transition-all duration-500 hover:-translate-y-1"
                  >
                    {/* Yuqori dekorativ chiziq (Terminal darchasi kabi) */}
                    <div className="absolute top-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />

                    <div className="flex items-start justify-between mb-5">
                      {/* Ikonka: Code style */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative p-2.5 bg-card border  rounded-xl text-primary">
                          <Code2 size={20} strokeWidth={2.5} />
                        </div>
                      </div>

                      {/* Star count: Dev style */}
                      <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-sidebar border text-[10px] font-mono font-bold text-yellow-500/80">
                        <Star size={11} className="fill-yellow-500/20" />
                        <span>
                          {repo.stargazers_count.toString().padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Repo Name: Shell path style */}
                    <h4 className="font-mono font-bold text-base mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                      <span className="text-primary/50 text-xs">~/</span>
                      {repo.name}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-6 h-8 font-sans leading-relaxed overflow-scroll">
                      {repo.description ||
                        "// No documentation provided for this module."}
                    </p>

                    {/* Footer: Metadata & Link */}
                    <div className="flex items-center justify-between pt-4 border-t border-zinc-800/50">
                      {/* Language: Status Badge */}
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full animate-pulse ${repo.language ? "bg-primary" : "bg-zinc-600"}`}
                        />
                        <span className="text-[10px] font-mono font-bold text-foreground/70 uppercase tracking-tighter">
                          {repo.language || "Binary"}
                        </span>
                      </div>

                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-primary/5 border border-primary/10 text-[11px] font-bold hover:bg-primary hover:text-primary-foreground transition-all group/link"
                      >
                        SOURCE
                        <ArrowUpRight
                          size={14}
                          className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                        />
                      </a>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
};
