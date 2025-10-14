export interface Project {
  title: string;
  description: string;
  date: string;
  techStack: string[];
  githubURL: string;
  appURL: string;
  src: string;
}

export interface Resume {
  id: string;
  type: "work" | "education" | string;
  title: string;
  organization: string;
  period: string;
  description: string;
  skills?: string[];
  src?: string;
  alt?: string;
  active: boolean;
}
