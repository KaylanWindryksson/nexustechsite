export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  keyBenefit: string;
  technologies: string[];
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categorySlug: 'sistemas' | 'aplicativos' | 'ecommerce' | 'landing' | 'todos';
  description: string;
  challenge: string;
  solution: string;
  metrics: string;
  technologies: string[];
  imageUrl: string;
  featured?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  content: string;
  projectType: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface QuoteFormData {
  serviceType: string;
  timeline: string;
  budgetRange: string;
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  details: string;
}
