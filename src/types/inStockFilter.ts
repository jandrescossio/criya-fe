export interface InStockFilterProps {
  inStock: boolean;
  handleInStock: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
