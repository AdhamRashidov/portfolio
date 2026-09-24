import type { Project } from "@/types/types";
import { ExternalLink, Github, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col bg-card border border-border rounded-[2rem] overflow-hidden hover:border-primary/20 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/5">
      <div className="relative aspect-video overflow-hidden border-b border-border">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80";
          }}
        />

        {project.featured && (
          <div className="absolute top-6 left-6">
            <Badge className="bg-primary/90 backdrop-blur-md text-[10px] uppercase font-bold tracking-widest px-3 py-1 border-none shadow-lg">
              Featured Project
            </Badge>
          </div>
        )}

        <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
          {project.githubLink && (
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
          )}
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

      <div className="p-8 flex flex-col grow space-y-3">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors italic leading-none tracking-tight">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4 overflow-scroll">
            {project.description}
          </p>
        </div>

        <div className="relative pt-4">
          <div className="flex flex-nowrap overflow-x-auto gap-3 pb-3 no-scrollbar scroll-smooth">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="shrink-0 cursor-pointer text-[10px] font-mono font-bold text-foreground/70 
                   bg-secondary/30 px-3 py-1 rounded-lg border border-white/5
                   shadow-[2px_2px_5px_rgba(0,0,0,0.3),-1px_-1px_3px_rgba(255,255,255,0.05)]
                   hover:shadow-none hover:translate-y-px hover:text-primary transition-all uppercase tracking-tight"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-6 mt-auto border-t border-border/50">
          {project.githubLink && (
            <Button
              variant="default"
              size="sm"
              className="gap-2 rounded-xl px-6 font-bold"
              asChild
            >
              <a href={project.githubLink} target="_blank" rel="noreferrer">
                <Github size={16} /> Code
              </a>
            </Button>
          )}

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

          {project.alarm && (
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/30 border border-border/50">
              <Lock className="w-4 h-4 text-muted-foreground/60" />
              <p className="text-[11px] md:text-xs text-muted-foreground font-mono leading-tight">
                <span className="text-primary/70 font-bold">
                  // PRIVATE_MODULE:
                </span>
                Mualliflik huquqi sababli manba kodi va demo yopiq.
              </p>
            </div>
          )}

          {project.process && (
            <button
              type="button"
              className="group/process relative font-mono text-[14px] font-medium text-green-600 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-xl blur-lg transition-all duration-300 group-hover/process:bg-green-500/40 group-active/process:blur-md" />
              <div className="relative flex items-center justify-center gap-3 rounded-xl border border-green-500/30 bg-accent px-3 py-1.5 backdrop-blur-md transition-all duration-300 group-hover/process:border-green-500 group-active/process:scale-95">
                <span>Process</span>
                <div className="relative h-4 w-4">
                  <span className="absolute inset-0 rounded-full border-2 border-green-500/20" />
                  <span className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-green-500" />
                </div>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
