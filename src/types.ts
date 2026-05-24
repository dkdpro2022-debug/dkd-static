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
