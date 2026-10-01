const GITHUB_USER = process.env.GITHUB_USER || "ARO65";
const headers = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
};
export async function getGithubProjects() {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`,
      { headers, next: { revalidate: 3600, tags: ["github-projects"] } },
    );
    if (!res.ok) return [];
    const repos = await res.json();
    return repos
      .filter((r) => !r.fork && !r.archived)
      .map((r) => ({
        id: r.id,
        name: r.name,
        description: r.description,
        url: r.html_url,
        homepage: r.homepage,
        language: r.language,
        updatedAt: r.updated_at,
        stars: r.stargazers_count,
        topics: r.topics || [],
      }));
  } catch {
    return [];
  }
}
export async function getGithubProfile() {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}`, {
      headers,
      next: { revalidate: 86400 },
    });
    return res.ok ? res.json() : null;
  } catch {
    return null;
  }
}
