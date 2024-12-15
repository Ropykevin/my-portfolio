export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface NavLink {
  href: string;
  label: string;
}