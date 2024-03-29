import React from "react";
import Card from "./Card";
import { robots } from "./robots";

const Cardlist = () => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].name}
          />
        );
      })}
    </div>
  );
};

export default Cardlist;
