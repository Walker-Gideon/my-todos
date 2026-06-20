import { useState, createContext } from "react";
import type { CategoryContextType } from "./CategoryContext.types";

const CategoryContext = createContext<CategoryContextType | null>(null);

export function CategoryProvider({ children }: { children: React.ReactNode }) {
  const [activeCategoryModal, setActiveCategoryModal] = useState<string | null>(
    null,
  );

  return (
    <CategoryContext.Provider
      value={{ activeCategoryModal, setActiveCategoryModal }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

export { CategoryContext };
