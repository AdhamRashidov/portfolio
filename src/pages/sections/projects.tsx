import { useMemo, useState } from "react";
import projectsData from "@/data/projects.json";
import type { ProjectsData } from "@/types/types";
import { ProjectCard } from "@/custom/project-card";
import { getActiveCategories, getCategoryProjects } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { Layers, Code2, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const data = projectsData as ProjectsData;

export const Projects = () => {
  const categories = useMemo(() => getActiveCategories(data), []);
  const [activeCategoryId, setActiveCategoryId] = useState(
    () => categories[0]?.id ?? "",
  );

  const activeProjects = useMemo(
    () => getCategoryProjects(data, activeCategoryId),
    [activeCategoryId],
  );

  const activeLabel =
    categories.find((c) => c.id === activeCategoryId)?.label ?? "";

  return (
    <section
      id="projects"
      className="py-20 container mx-auto px-4 border-t border-border/50"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
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
              href="https://github.com/AdhamRashidov"
              target="_blank"
              rel="noreferrer"
            >
              Barcha kodlarni ko'rish <Code2 size={16} className="ml-2" />
            </a>
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-12 pb-1 border-b border-border/40">
        {categories.map((category) => {
          const isActive = category.id === activeCategoryId;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategoryId(category.id)}
              className={cn(
                "relative px-4 py-2.5 text-sm font-mono font-medium rounded-t-xl transition-colors duration-300",
                "border border-transparent border-b-0 -mb-px",
                isActive
                  ? "text-foreground bg-card border-border/60 shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/30",
              )}
            >
              {isActive && (
                <span className="absolute left-3 right-3 top-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
              )}
              {category.label}
            </button>
          );
        })}
      </div>

      {activeProjects.length > 0 ? (
        <div
          key={activeCategoryId}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-in fade-in duration-300"
        >
          {activeProjects.map((project) => (
            <ProjectCard key={`${project.category}-${project.id}`} project={project} />
          ))}
        </div>
      ) : (
        <div
          key={activeCategoryId}
          className="flex flex-col items-center justify-center py-20 px-6 rounded-[2rem] border border-dashed border-border/60 bg-muted/10 animate-in fade-in duration-300"
        >
          <FolderOpen
            className="text-muted-foreground/40 mb-4"
            size={40}
            strokeWidth={1.5}
          />
          <p className="text-sm font-mono text-muted-foreground text-center max-w-md">
            <span className="text-foreground/80">{activeLabel}</span> bo'limida
            hozircha loyihalar yo'q. Yangi loyihalarni{" "}
            <code className="text-xs text-primary/80">projects.json</code> orqali
            qo'shing.
          </p>
        </div>
      )}
    </section>
  );
};
