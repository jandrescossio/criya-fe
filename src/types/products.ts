import React from "react";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  url: string;
  size: string;
  in_stock: boolean;
  retailer_id: number;
  types: string[];
  colors: string[];
  settings: string[];
  designers: string[];
  vendors: string[];
  materials: string[];
  retailer: string;
  created_at: string;
  updated_at: string;
}

export interface ProductCardProps extends React.AllHTMLAttributes<HTMLDivElement> {
  product: Product;
}

export interface ProductSectionProps {
  values: string[];
  title: string;
}