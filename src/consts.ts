import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Aleksei Mogilnikov",
  EMAIL: "alexey@mogilnikov.name",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Personal projects, engineering experience, and short notes on technology.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Notes on building, shipping, and learning in software.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Selected personal and open-source projects with links.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/amogil"
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/alexey-mogilnikov/"
  }
];
