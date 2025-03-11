export type PagingResponse<T> = {
  items: T[];
  total: number;
  currentPage: number;
  pageSize: number;
  totalPages: number;
};

export type PagingQuery = {
  page: number;
  size: number;
};
