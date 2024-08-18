import React from "react";
import Banner from "../../components/Banner";
import Categories from "./Categories";
import SpecialDishes from "./SpecialDishes";
import LayGrid from "./LayGrid";
const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <SpecialDishes />
      <LayGrid />
    </div>
  );
};

export default Home;
