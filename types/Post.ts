
export interface Post {
  metadata: {
    id: string;
    title: string;
    created_at: string;
    description: string;
    slug: string;
    categories: string[];
  }
  content: string;
}