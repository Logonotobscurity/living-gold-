import { useState, useMemo } from 'react';
import type { Product } from '../types';

const ITEMS_PER_PAGE = 15;

export function useProductFiltering(products: Product[]) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [itemsToShow, setItemsToShow] = useState<number>(ITEMS_PER_PAGE);

  const filteredProducts = useMemo(() => {
    const filtered = selectedCategory === 'All'
      ? products
      : products.filter(product => product.category === selectedCategory);
    return filtered.slice(0, itemsToShow);
  }, [products, selectedCategory, itemsToShow]);

  const totalCount = selectedCategory === 'All'
    ? products.length
    : products.filter(p => p.category === selectedCategory).length;

  const hasMore = filteredProducts.length < totalCount;

  const loadMore = () => setItemsToShow(prev => prev + ITEMS_PER_PAGE);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setItemsToShow(ITEMS_PER_PAGE);
  };

  return {
    filteredProducts,
    selectedCategory,
    setSelectedCategory: handleCategoryChange,
    hasMore,
    loadMore,
    totalCount
  };
}