import { Skill, Experience, Project, BlogPost } from "@/types/portfolio";
import {
  Code2,
  Database,
  Cloud,
  ShieldCheck,
  Terminal,
  Cpu,
} from "lucide-react";

export const SKILLS: Skill[] = [
  // Frontend
  { name: "React/Next.js", category: "frontend", proficiency: 90 },
  { name: "TypeScript", category: "frontend", proficiency: 85 },
  { name: "Tailwind CSS", category: "frontend", proficiency: 85 },

  // Backend
  { name: "Node.js/Express", category: "backend", proficiency: 85 },
  { name: "RESTful APIs", category: "backend", proficiency: 90 },
  { name: "NestJS (Basic)", category: "backend", proficiency: 60 },

  // Databases
  { name: "MongoDB", category: "database", proficiency: 80 },
  { name: "PostgreSQL", category: "database", proficiency: 75 },

  // Testing
  { name: "Automation Testing", category: "testing", proficiency: 80 },
  { name: "Manual Testing", category: "testing", proficiency: 85 },
  { name: "Postman/API Test", category: "testing", proficiency: 90 },
  { name: "Jira/Bug Tracking", category: "testing", proficiency: 85 },

  // DevOps
  { name: "Docker/CI/CD", category: "devops", proficiency: 75 },
  { name: "AWS (EC2/S3)", category: "devops", proficiency: 70 },

  //Tools
  { name: "Git/GitHub", category: "tools", proficiency: 90 },
  { name: "Figma (UI)", category: "tools", proficiency: 75 },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "scorelens",
    title: "Full Stack Developer (Capstone Project)",
    company: "ScoreLens - AI Billiard Scoring Platform",
    duration: "May 2025 - Sep 2025",
    role: "Full-Stack & System Architect",
    description:
      "Led the development of an AI-powered automated scoring system for billiard clubs. Integrated AI camera streams with a real-time web dashboard.",
    impact:
      "Successfully deployed a real-time scoring system with sub-second latency using Socket.io and optimized MongoDB queries for match history analysis.",
    technologies: [
      "Next.js",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "AWS",
      "AI Integration",
    ],
    keyAchievements: [
      "Architected full-stack solution handling real-time data from AI cameras",
      "Implemented live score broadcasting to connected client devices via WebSockets",
      "Designed database schema for players, matches, and club management",
      "Collaborated with AI team to synchronize scoring events with video feed",
    ],
  },
  {
    id: "up-skill",
    title: "Web Developer",
    company: "Up-Skill - E-Learning Platform",
    duration: "Jan 2025 - Mar 2025",
    role: "Backend & Frontend Developer",
    description:
      "Built a comprehensive online learning platform connecting students and instructors with secure payment processing.",
    impact:
      "Delivered 20+ reusable UI components and secure RESTful APIs for cart/coupon management, ensuring a scalable architecture.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Cloudinary",
      "Vercel",
    ],
    keyAchievements: [
      "Engineered secure API endpoints for course transactions and user management",
      "Designed scalable Database Schemas for Users, Courses, and Orders",
      "Developed modular UI components ensuring 100% type safety with TypeScript",
      "Integrated Cloudinary for efficient media asset management",
    ],
  },
  {
    id: "capitaland",
    title: "Tester & QA Intern",
    company: "FPT Software / Capitaland Project",
    duration: "Apr 2024 - Dec 2024",
    role: "Manual Testing",
    description:
      "Contributed to a massive migration project (15,000+ pages) for a multinational real estate client. Bridged the gap between Dev and QA teams.",
    impact:
      "Reduced manual migration time by 40% through automation scripts and ensured a 98% crash-free rate upon system launch.",
    technologies: [
      "Microsoft Office",
      "Jira",
      "AEM (Adobe Experience Manager)",
      "Manual Testing",
      "JSON Tools",
    ],
    keyAchievements: [
      "Developed JS automation scripts to process JSON data for 15,000+ web pages",
      "Identified and resolved 50+ critical bugs during UAT phase using Jira",
      "Collaborated with 50-member cross-functional team under Agile Scrum methodology",
      "Verified data integrity between old HTML/CSS system and new AEM CMS",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "scorelens-project",
    title: "ScoreLens - AI Billiard Manager",
    description:
      "Real-time billiard scoring and club management platform powered by AI camera analysis.",
    shortDescription: "AI-powered Real-time Scoring System",
    problem:
      "Traditional billiard scoring is manual and prone to errors. Club managers lack real-time insights into table usage and match history.",
    solution:
      "Built a real-time web platform that syncs with AI cameras to auto-update scores. Includes a dashboard for managers to track revenue and player stats.",
    impact:
      "Eliminated manual scoring errors and provided a modern, interactive experience for players and club owners.",
    technologies: [
      "Next.js",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "AWS EC2",
      "Docker",
    ],
    metrics: [
      { label: "Team Size", value: "5 Members" },
      { label: "Latency", value: "< 200ms" },
      { label: "Tech Stack", value: "MERN + Socket" },
    ],
    links: {
      github: "https://github.com/trunghoan203/ScoreLens-Frontend",
      demo: "#",
    },
  },
  {
    id: "upskill-project",
    title: "Up-Skill E-Learning",
    description:
      "Full-featured online course marketplace with instructor dashboards and student learning portals.",
    shortDescription: "MERN Stack Course Marketplace",
    problem:
      "Need for a scalable platform where instructors can easily create courses and students can track progress seamlessly.",
    solution:
      "Developed a monolithic architecture with Next.js frontend and Node.js backend. Implemented secure cart management and complex database relationships.",
    impact:
      "Created a seamless learning experience with robust content management for instructors.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "SonarCloud",
    ],
    metrics: [
      { label: "Team Size", value: "6 Members" },
      { label: "Components", value: "20+" },
      { label: "Database", value: "MongoDB" },
    ],
    links: {
      github: "https://github.com/TrongHuy0104/Up-Skill",
      demo: "#",
    },
  },
  {
    id: "capitaland-tool",
    title: "Capitaland Migration Automation",
    description:
      "Internal automation toolset to validate and migrate 15,000+ web pages from HTML/CSS to Adobe Experience Manager.",
    shortDescription: "Automation Scripting & Data Migration",
    problem:
      "Migrating 15,000 pages manually would take months and result in high human error rates.",
    solution:
      "Wrote custom JavaScript scripts to parse, transform, and validate JSON data, automating the content entry process.",
    impact:
      "Cut down migration time by 40% and ensured high data accuracy across thousands of pages.",
    technologies: ["JSON Processing", "Automation", "Data Validation"],
    metrics: [
      { label: "Pages Migrated", value: "15,000+" },
      { label: "Time Saved", value: "40%" },
      { label: "Accuracy", value: "99.9%" },
    ],
    links: {
      github: "#",
      demo: "#",
    },
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "realtime-socket",
    title: "Building Real-time Features with Socket.io in Next.js",
    excerpt:
      "How I implemented live score updates for the ScoreLens project, handling synchronization between AI cameras and web clients.",
    date: "2025-08-15",
    tags: ["Socket.io", "Next.js", "Real-time"],
    content: "Detailed content...",
  },
  {
    id: "automation-testing",
    title: "Bridging the Gap: From Manual to Automation Testing",
    excerpt:
      "My experience migrating 15,000 pages at Capitaland and how automation scripts saved the day.",
    date: "2024-12-20",
    tags: ["Testing", "Automation", "Career"],
    content: "Detailed content...",
  },
  {
    id: "clean-architecture",
    title: "Designing Scalable Database Schemas with MongoDB",
    excerpt:
      "Lessons learned from designing the database for Up-Skill E-learning platform. Handling relationships and data integrity.",
    date: "2025-02-10",
    tags: ["MongoDB", "Database", "Backend"],
    content: "Detailed content...",
  },
];

export const SITE_CONFIG = {
  name: "Software Engineer | Full-Stack & Tester",
  email: "caotrunghoan2003@email.com",
  phone: "+84 357 859 348",
  location: "Quy Nhon, Gia Lai, Vietnam (Willing to relocate)",
  availability: "Available for full-time opportunities",
  linkedIn: "https://www.linkedin.com/in/caotrunghoan/",
  github: "https://github.com/trunghoan203/",
};
