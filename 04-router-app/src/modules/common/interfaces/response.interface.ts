export type ResultResponse<T> = {
  ok: boolean;
  data?: T;
  error?: string;
};
