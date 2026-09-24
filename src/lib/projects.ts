import type { Project, ProjectCategory, ProjectsData } from "@/types/types";

export function getCategoryProjects(
  data: ProjectsData,
  categoryId: ProjectCategory["id"],
): Project[] {
  return data.projects
    .filter((project) => project.category === categoryId)
    .sort((a, b) => b.id - a.id);
}

export function getActiveCategories(data: ProjectsData): ProjectCategory[] {
  return data.categories;
}
