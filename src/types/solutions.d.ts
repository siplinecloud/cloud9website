export interface Solution {
  id: number;
  title: string;
  slug: string;
  description: string;
  bgGradient: string;
  features: string[];
  icon: string;
}

export interface SolutionFeature {
  title: string;
  description: string;
  icon: string;
}