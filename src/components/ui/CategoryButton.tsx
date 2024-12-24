import React from 'react';

interface CategoryButtonProps {
  category: string;
  isSelected: boolean;
  onClick: () => void;
}

export const CategoryButton: React.FC<CategoryButtonProps> = ({
  category,
  isSelected,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
        ${
          isSelected
            ? 'bg-gold-500 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
    >
      {category}
    </button>
  );
}; 