import { FC } from "react";
import Hero from "../../components/Hero";
import Filter from "../../components/Filter";
import List from "../../components/List";

const Home: FC = () => {
  return (
    <div>
      <Hero />
      <Filter />
      <List />
    </div>
  );
};

export default Home;
