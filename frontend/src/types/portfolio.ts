export interface Skill {
  name: string;
  category:
    | "frontend"
    | "backend"
    | "database"
    | "soft-skills"
    | "devops"
    | "testing"
    | "tools";
  proficiency: number; // 0-100
  icon?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string;
  impact: string;
  technologies: string[];
  role: string;
  keyAchievements: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  links: {
    github?: string;
    demo?: string;
  };
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  tags: string[];
}
