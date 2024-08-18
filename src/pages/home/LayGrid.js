import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards";

const SpecialDishes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        // Filter items that belong to either "popular" or "dessert"
        const specials = data.filter(
          (item) => item.category === "offered" || item.category === "dessert"
        );
        setRecipes(specials);
      });
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 my-20">
      <div className="text-left">
        <h2 className="title">Best food in Delhi NCR</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {recipes.map((item, i) => (
          <Cards item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default SpecialDishes;
