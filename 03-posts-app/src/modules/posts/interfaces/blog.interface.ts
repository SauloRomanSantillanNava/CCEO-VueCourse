export interface BasePost {
  id: number;
  title: string;
  body: string;
}

export interface Post extends BasePost {}
