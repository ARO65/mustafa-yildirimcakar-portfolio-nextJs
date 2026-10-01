import { getGithubProjects } from "./github-service";
import {
  mergePortfolioProjects,
  getProjectBySlug,
} from "@/helpers/project-helpers";
export async function getProjects() {
  return mergePortfolioProjects(await getGithubProjects());
}
export async function getFeaturedProjects() {
  return (await getProjects()).filter((p) => p.featured).slice(0, 6);
}
export async function getProject(slug) {
  return getProjectBySlug(await getProjects(), slug);
}
