import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys}) {
  const toyCard = toys.map((toy) => <ToyCard key={toy.id} toy={toy}/>)
  return (
    <div id="toy-collection">{ toyCard }</div>
  );
}

export default ToyContainer;
