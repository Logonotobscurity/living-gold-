import React from 'react';
import { CategoryButton } from '../ui/CategoryButton';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <CategoryButton
        category="All"
        isSelected={selectedCategory === null}
        onClick={() => onCategoryChange(null)}
      />
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          isSelected={selectedCategory === category}
          onClick={() => onCategoryChange(category)}
        />
      ))}
    </div>
  );
};