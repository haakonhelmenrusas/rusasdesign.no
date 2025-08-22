export interface Post {
  data: {
    id: string;
    title: string;
    created_at: string;
    description: string;
    slug: string;
    tags: string[];
  };
  content: string;
}