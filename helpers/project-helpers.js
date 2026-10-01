import { projectOverrides, localCaseStudies } from "@/data/projects";
export const slugify = (value = "") =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
export const normalizeProject = (repo) => {
  const o = projectOverrides[repo.name] || {};
  return {
    ...repo,
    repoName: repo.name,
    slug: o.slug || slugify(repo.name),
    title: o.title || repo.name.replaceAll("-", " "),
    summary:
      o.summary ||
      repo.description ||
      "Frontend project from my GitHub portfolio.",
    category: o.category || repo.language || "Frontend",
    stack: o.stack || [repo.language].filter(Boolean),
    highlights: o.highlights || [
      "GitHub repository",
      "Frontend implementation",
    ],
    featured: Boolean(o.featured),
  };
};
export const mergePortfolioProjects = (repos = []) => {
  const normalized = repos.map(normalizeProject);
  const repoNames = new Set(normalized.map((p) => p.repoName));
  return [
    ...localCaseStudies.filter((p) => !repoNames.has(p.repoName)),
    ...normalized,
  ];
};
export const getProjectBySlug = (projects, slug) =>
  projects.find((p) => p.slug === slug);
