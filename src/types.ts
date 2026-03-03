export type SectionType = 'hero' | 'features' | 'testimonials' | 'pricing' | 'contact' | 'footer' | 'gallery' | 'faq';

export interface LandingPageSection {
  id: string;
  type: SectionType;
  content: any;
}

export interface Theme {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  borderRadius: string;
  style: 'modern' | 'classic' | 'elegant' | 'brutalist';
}

export interface LandingPageData {
  id: string;
  name: string;
  theme: Theme;
  sections: LandingPageSection[];
}

export interface ABTestConfig {
  hypothesis: string;
  metric: string;
  distribution: number; // percentage for Version B
  versionA: LandingPageData;
  versionB: LandingPageData;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  data: Partial<LandingPageData>;
}

export interface MarketingSuggestion {
  title: string;
  subtitle: string;
  cta: string;
  imagePrompt: string;
  features: { title: string; description: string }[];
}
