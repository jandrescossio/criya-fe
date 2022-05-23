export interface Pagination<T = any> {
  page: number;
  current_page: number;
  data: T[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface PaginationProps {
  currentPage: number;
  next: () => void;
  prev: () => void;
  first: () => void;
  last: () => void;
}