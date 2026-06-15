import React from "react";

// context/CategoryContext.tsx
const CategoryContext = React.createContext(null);

export function CategoryProvider({ children }) {
  const [activeCategoryModal, setActiveCategoryModal] = React.useState(null);

  return (
    <CategoryContext.Provider value={{ activeCategoryModal, setActiveCategoryModal }}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategoryContext() {
  return React.useContext(CategoryContext);
}