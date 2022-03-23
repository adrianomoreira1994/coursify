import { Category } from "./category";

export type Post = {
  id: number;
  title: {
    rendered: string;
  };
  status: string;
  featured_media: number;
  content: {
    rendered: string
  };
  page_views: number;
  categories: Category[]
  excerpt: {
    rendered: string
  }
}