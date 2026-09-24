export type ProjectCategoryId = string;

export interface ProjectCategory {
  id: ProjectCategoryId;
  label: string;
}

export interface Project {
  id: number;
  category: ProjectCategoryId;
  title: string;
  description: string;
  techStack: string[];
  githubLink: string | null;
  liveDemo: string | null;
  image: string;
  featured?: boolean;
  alarm?: boolean;
  process?: boolean;
}

export interface ProjectsData {
  categories: ProjectCategory[];
  projects: Project[];
}
