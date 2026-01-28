import { Badge } from "@/components/ui/badge";
import { Cpu, Database, Terminal, Layout } from "lucide-react";

const SKILLS = [
  {
    category: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    techs: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Framer Motion",
      "VITE",
      "HTML5",
      "CSS",
      "SCSS",
      "shadcnUi",
      "MaterialUi",
      "Redux",
      "Tanstacks",
    ],
  },
  {
    category: "Backend",
    icon: <Database className="w-5 h-5" />,
    techs: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "MySql",
      "Redis",
      "JavaScript (ES6+)",
      "TypeScript",
      "NestJs",
      "KoaJs",
      "Fastify",
    ],
  },
  {
    category: "Tools & DevOps",
    icon: <Terminal className="w-5 h-5" />,
    techs: [
      "GitHub",
      "Docker",
      "AWS",
      "Nginx",
      "CI/CD",
      "PM2",
      "REST API",
      "GraphQL",
      " WebSocket",
    ],
  },
];

export const Stack = () => {
  return (
    <section
      id="stack"
      className="py-20 container mx-auto px-4 border-t border-border/50"
    >
      <div className="space-y-4 mb-12 text-center md:text-left">
        <div className="group inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-linear-to-r from-primary/10 to-transparent border-l-2 border-primary transition-all duration-300 hover:gap-3">
          <Cpu
            size={14}
            className="text-primary transition-transform group-hover:scale-110"
          />
          <span className="text-[12px] font-black uppercase tracking-widest text-foreground/80 group-hover:text-primary transition-colors">
            Texnologiyalar
          </span>
        </div>
        <h2 className="text-4xl font-bold tracking-tight italic">
          Mening Stackim
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILLS.map((item) => (
          <div
            key={item.category}
            className="group relative p-8 rounded-[2rem] border border-border/50 bg-card/40 
             backdrop-blur-md transition-all duration-500 ease-out
             hover:border-primary/40 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] 
             hover:-translate-y-2 overflow-hidden"
          >
            {/* Glassmorphism uchun orqa fondagi yengil nur */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full justify-between space-y-8">
              {/* Yuqori qism: Ikonka va Sarlavha animatsiyasi */}
              <div className="space-y-5">
                <div
                  className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary border border-primary/20 
                      group-hover:rotate-12 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground 
                      transition-all duration-300 shadow-sm"
                >
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-xl font-black tracking-tight uppercase italic text-foreground/90 group-hover:text-primary transition-colors duration-300">
                    {item.category}
                  </h3>
                  {/* Bento stilidagi chiziqcha animatsiyasi */}
                  <div className="w-10 h-1 bg-primary mt-2 rounded-full group-hover:w-full transition-all duration-500 ease-in-out" />
                </div>
              </div>

              {/* Pastki qism: Badge-lar (texnologiyalar) */}
              <div className="flex flex-wrap gap-2">
                {item.techs.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="shrink-0 cursor-pointer text-[10px] font-mono font-bold text-foreground/70 
                   bg-secondary/30 px-3 py-1 rounded-lg border border-white/5
                   shadow-[2px_2px_5px_rgba(0,0,0,0.3),-1px_-1px_3px_rgba(255,255,255,0.05)]
                   hover:shadow-none hover:translate-y-px hover:text-primary transition-all uppercase tracking-tight"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
