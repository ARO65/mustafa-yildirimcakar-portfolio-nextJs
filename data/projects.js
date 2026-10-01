export const featuredProjectNames = [
  "mustafa-yildirimcakar-web",
  "react-project-1",
  "AI-Quote-Prompt-Studio",
];

export const projectOverrides = {
  "mustafa-yildirimcakar-web": {
    slug: "portfolio-web",
    title: "Portfolio & Client Portal",
    featured: true,
    category: "Next.js",
    summary:
      "A server-first portfolio and client request portal with authentication, dynamic project pages and GitHub integration.",
    stack: ["Next.js", "React", "SCSS", "NextAuth", "Yup"],
    highlights: [
      "App Router architecture",
      "Credentials authentication",
      "Role-based dashboard",
      "GitHub API integration",
    ],
  },
  "react-project-1": {
    slug: "react-project",
    title: "React Project",
    featured: true,
    category: "React",
    summary:
      "A React-focused project selected from my GitHub work to demonstrate component-driven frontend development.",
    stack: ["React", "JavaScript", "CSS"],
    highlights: [
      "Reusable UI",
      "State-driven interaction",
      "Responsive frontend",
    ],
  },
  "AI-Quote-Prompt-Studio": {
    slug: "ai-quote-prompt-studio",
    title: "AI Quote Prompt Studio",
    featured: true,
    category: "JavaScript",
    summary:
      "A focused UI project exploring prompt-oriented interactions and compact product design.",
    stack: ["JavaScript", "HTML", "CSS"],
    highlights: ["Interactive UI", "Prompt workflow", "Product-focused layout"],
  },
  EasyGoingEducation: {
    slug: "easy-going-education",
    title: "Easy Going Education",
    featured: true,
    category: "Next.js",
    summary:
      "Education management frontend architecture using App Router, Server Actions, REST services, Yup validation and role-aware authentication.",
    stack: ["Next.js", "React", "SCSS", "NextAuth", "Yup", "REST API"],
    highlights: [
      "Server Actions",
      "Service layer",
      "Normalized errors",
      "Authentication & authorization",
    ],
  },
};

export const localCaseStudies = [
  {
    repoName: "EasyGoingEducation",
    ...projectOverrides.EasyGoingEducation,
    url: null,
    language: "JavaScript",
    updatedAt: null,
    stars: 0,
  },
];
