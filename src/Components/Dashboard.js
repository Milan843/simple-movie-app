import React, { useState, useEffect } from "react";
import Card from "./Card";
import Footer from "./Footer";

export default function Dashboard({ movie }) {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([]);

  // Fetch data from the json file in form of api
  async function fetchData() {
    fetch("./data.json")
      .then((response) => response.json())
      .then((json) => setData(json.data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  // handle the next button , if on last page then stop
  const handleNext = () => {
    if (counter === data?.length - 1) {
      return;
    }
    setCounter((count) => count + 1);
  };

  //handle previous button, if on first index the stop
  const handlePrevious = () => {
    if (counter === 0) {
      return;
    }
    setCounter((count) => count - 1);
  };

  return (
    <div>
      <Card movie={data[counter]} />
      <Footer handleNext={handleNext} handlePrevious={handlePrevious} />
    </div>
  );
}
