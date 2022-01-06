import React from "react";

const CategoryList = ({
  cat,
  category,
  isCategoryOpen,
  setIsCategoryOpen,
  handleCategory,
}) => {
  return (
    <div className="category-main-container">
      <div className="category">
        <div
          className="category-dropdown"
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
        >
          <label htmlFor="">{category ? category.title : "Category"}</label>
          <i className="bi bi-caret-down-fill"></i>
        </div>
        {isCategoryOpen && (
          <div className="category-container">
            {cat.map((category) => (
              <div
                className="category-item"
                key={category.id}
                style={{ borderRight: `5px solid ${category.color}` }}
                onClick={() => handleCategory(category)}
              >
                <label htmlFor="">{category.title}</label>
                <img src={category.icon} alt={category.title} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
