import React from 'react';
import { CATEGORIES, EventCategory } from '../../shared/categories';

interface CategoryFilterProps {
  selectedCategories: EventCategory[];
  onCategoryChange: (categories: EventCategory[]) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategories,
  onCategoryChange
}) => {
  const handleToggle = (category: EventCategory) => {
    if (selectedCategories.includes(category)) {
      onCategoryChange(selectedCategories.filter(c => c !== category));
    } else {
      onCategoryChange([...selectedCategories, category]);
    }
  };

  const handleSelectAll = () => {
    if (selectedCategories.length === Object.keys(CATEGORIES).length) {
      onCategoryChange([]);
    } else {
      onCategoryChange(Object.keys(CATEGORIES) as EventCategory[]);
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Categories</h3>
        <button
          onClick={handleSelectAll}
          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
        >
          {selectedCategories.length === Object.keys(CATEGORIES).length ? 'Clear All' : 'Select All'}
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {Object.entries(CATEGORIES).map(([key, category]) => (
          <button
            key={key}
            onClick={() => handleToggle(key as EventCategory)}
            className={`p-3 rounded-lg transition transform hover:scale-105 ${
              selectedCategories.includes(key as EventCategory)
                ? `bg-gradient-to-br ${category.color} text-white shadow-lg`
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <div className="text-2xl mb-1">{category.icon}</div>
            <div className="text-sm font-medium">{category.name}</div>
          </button>
        ))}
      </div>

      {selectedCategories.length > 0 && (
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            Showing events in: <span className="font-semibold">{selectedCategories.join(', ')}</span>
          </p>
        </div>
      )}
    </div>
  );
};
