export type ThemeMode = 'cyber-editorial' | 'brutalist-raw' | 'holographic-mesh';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Research & Papers' | 'Behavioral Finance' | 'Corporate Analytics' | 'Social Impact';
  year: string;
  institution?: string;
  metrics: { label: string; value: string; detail?: string }[];
  summary: string;
  methodologies: string[];
  findings: string[];
  tags: string[];
  featured?: boolean;
  colorAccent?: string;
  paperReference?: string;
  hasInteractiveLab?: boolean;
  labType?: 'lcoe' | 'risk-tolerance' | 'ecommerce';
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  duration: string;
  location: string;
  type: 'Internship' | 'Leadership' | 'Initiative';
  highlights: string[];
  technologies: string[];
  impactScore?: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  year: string;
  category: 'National / Academic' | 'Case Competition' | 'Sports & Leadership' | 'Distinction';
  description?: string;
  badge: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}
