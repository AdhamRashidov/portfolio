import projectsData from "@/data/projects.json";
import { ExternalLink, Github, Layers, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Projects = () => {
  // Loyihalarni ID bo'yicha teskari tartibda (yangi loyihalar tepada) ko'rsatish
  const projects = [...projectsData].reverse();

  return (
    <section
      id="projects"
      className="py-20 container mx-auto px-4 border-t border-border/50"
    >
      {/* Sarlavha bloki */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="space-y-4">
          <div className="group inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-linear-to-r from-primary/10 to-transparent border-l-2 border-primary transition-all duration-300 hover:gap-3">
            <Layers
              size={14}
              className="text-primary transition-transform group-hover:scale-110"
            />
            <span className="text-[12px] font-black uppercase tracking-widest text-foreground/80 group-hover:text-primary transition-colors">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight italic lg:text-5xl">
            Saralangan Loyihalar
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
            Backend tizimlardan tortib, murakkab foydalanuvchi
            interfeyslarigacha bo'lgan tajribam mahsullari. Har bir loyiha
            ma'lum bir muammoning yechimidir.
          </p>
        </div>

        <div className="hidden md:block pb-2">
          <Button
            variant="link"
            className="text-muted-foreground hover:text-primary transition-colors font-mono"
            asChild
          >
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noreferrer"
            >
              Barcha kodlarni ko'rish <Code2 size={16} className="ml-2" />
            </a>
          </Button>
        </div>
      </div>

      {/* Loyihalar Grid tizimi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col bg-card border border-border rounded-[2rem] overflow-hidden hover:border-primary/20 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/5"
          >
            {/* Rasm va Overlay qismi */}
            <div className="relative aspect-video overflow-hidden border-b border-border">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"; // Zaxira rasm
                }}
              />

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-6 left-6">
                  <Badge className="bg-primary/90 backdrop-blur-md text-[10px] uppercase font-bold tracking-widest px-3 py-1 border-none shadow-lg">
                    Featured Project
                  </Badge>
                </div>
              )}

              {/* Hoverda chiqadigan tezkor tugmalar */}
              <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  asChild
                >
                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    <Github size={20} />
                  </a>
                </Button>
                {project.liveDemo && (
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
                    asChild
                  >
                    <a href={project.liveDemo} target="_blank" rel="noreferrer">
                      <ExternalLink size={20} />
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Kontent va Ma'lumotlar */}
            <div className="p-8 flex flex-col grow space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors italic leading-none tracking-tight">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack - Piktogrammalar o'rniga zamonaviy badge-lar */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono font-bold text-primary bg-primary/5 px-3 py-1 rounded-full border border-primary/10 uppercase tracking-tighter"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Pastki tugmalar (Mobil va qulaylik uchun) */}
              <div className="flex items-center gap-4 pt-6 mt-auto border-t border-border/50">
                <Button
                  variant="default"
                  size="sm"
                  className="gap-2 rounded-xl px-6 font-bold group/btn"
                  asChild
                >
                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    <Github size={16} /> Code
                  </a>
                </Button>

                {project.liveDemo && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 rounded-xl px-6 border-primary/20 hover:bg-primary/5 font-bold"
                    asChild
                  >
                    <a href={project.liveDemo} target="_blank" rel="noreferrer">
                      <ExternalLink size={16} /> Live
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
