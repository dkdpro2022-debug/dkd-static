export interface VideoItem {
  title: string;
  category: string;
  image: string;
  href: string;
}

export interface StoryItem {
  title: string;
  text: string;
  image: string;
}

export interface QuoteItem {
  name: string;
  role: string;
  avatar: string;
  text: string;
}

export type HomepageSectionLayout = "featured" | "grid" | "compact";

export interface HomepageItem {
  title: string;
  href: string;
  image?: string;
}

export interface HomepageSection {
  id: string;
  title: string;
  sourceUrl?: string;
  layout: HomepageSectionLayout;
  items: HomepageItem[];
}

export interface SourceSection {
  index: number;
  title: string;
  sourceUrl?: string;
  items: {
    title: string;
    href: string;
  }[];
}

export interface ContentDetail {
  description: string;
  videoUrl?: string;
  videoEmbedUrl?: string;
  body?: string[];
}
