import { Badge } from "@/components/ui/badge";
import {
  Cpu,
  Code2,
  Database,
  Terminal,
  Layout,
  ShieldCheck,
} from "lucide-react";

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
    ],
  },
  {
    category: "Backend",
    icon: <Database className="w-5 h-5" />,
    techs: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "Redis"],
  },
  {
    category: "Tools & DevOps",
    icon: <Terminal className="w-5 h-5" />,
    techs: ["Git", "Docker", "AWS", "Nginx", "CI/CD", "Linux"],
  },
];

export const Stack = () => {
  return (
    <section
      id="stack"
      className="py-20 container mx-auto px-4 border-t border-border/50"
    >
      <div className="space-y-4 mb-12 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-bold uppercase">
          <Cpu size={14} />
          <span>Texnologiyalar</span>
        </div>
        <h2 className="text-4xl font-bold tracking-tight italic">
          Mening Stackim
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILLS.map((item) => (
          <div
            key={item.category}
            className="p-8 rounded-[2rem] border border-border bg-card/50 hover:bg-card transition-colors space-y-6"
          >
            <div className="flex items-center gap-3 text-primary">
              {item.icon}
              <h3 className="font-bold text-xl italic">{item.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {item.techs.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-background border-border/50 px-3 py-1 text-xs font-mono"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
