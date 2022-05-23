export interface PriceRangeFilterProps {
  priceRange: { minPrice: number, maxPrice: number }
  handlePriceRange: (name:string, value:number) => void;
}