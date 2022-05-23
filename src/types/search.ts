export interface SearchProps {
  search: string;
  handleSearch: (search: string) => void;
  clear: () => void;
}
