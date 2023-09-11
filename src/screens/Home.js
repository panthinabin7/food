import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from "../components/Carousal";

const Home = () => {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    setFoodItem(data[0]);
    setFoodCat(data[1]);
    // console.log(data[0], data[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  console.log(foodCat);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousal />
      </div>
      <div className="container">
        {foodCat.length !== 0 ? (
          foodCat.map((data, i) => {
            return (
              <div>
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                  <hr />
                </div>
                {foodItem.length !== 0 ? (
                  foodItem
                    .filter((item) => item.CategoryName === data.CategoryName)
                    .map((filterItem) => {
                      return (
                        <div key={filterItem._id}>
                          <Card />
                        </div>
                      );
                    })
                ) : (
                  <div></div>
                )}
              </div>
            );
          })
        ) : (
          <div>********************</div>
        )}
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
