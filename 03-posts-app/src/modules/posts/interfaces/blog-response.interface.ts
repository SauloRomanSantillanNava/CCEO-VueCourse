import type { BasePost } from "./blog.interface";

export interface PostResponse extends BasePost {
  userId: number;
}
