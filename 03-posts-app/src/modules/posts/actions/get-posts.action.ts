import type { PostResponse } from "../interfaces/blog-response.interface";

class GetPostsHttpError extends Error {
  constructor(
    public readonly status: number,
    public readonly statusText: string,
  ) {
    super(`Failed to fetch posts: ${status} ${statusText}`);
    this.name = "GetPostsHttpError";
  }
}
export const getPosts = async (): Promise<PostResponse[]> => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!resp.ok) {
    throw new GetPostsHttpError(resp.status, resp.statusText);
  }
  const data = (await resp.json()) as PostResponse[];
  return data;
};
