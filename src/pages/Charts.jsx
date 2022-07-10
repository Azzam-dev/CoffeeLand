import React from "react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios";

const Charts = () => {
  const { t } = useTranslation();

  const [coffeeList, setCoffeeList] = useState([]);

  const [coffeeData, setCoffeeData] = useState({
    labels: [],
    datasets: [],
  });

  const getCoffeeList = async () => {
    const API_URL = "https://api.sampleapis.com/coffee/hot";
    axios
      .get(API_URL)
      .then((response) => {
        setCoffeeList(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    if (coffeeList.length == 0) {
      getCoffeeList();
    } else {
      setCoffeeData({
        labels: Object.keys(getUniqueIngredientsList()),
        datasets: [
          {
            label: t("charts_description"),
            data: Object.values(getUniqueIngredientsList()),
            backgroundColor: [
              "rgba(249, 211, 180, 1)",
              "rgba(100, 100, 100, 0.5)",
            ],
          },
        ],
      });
    }
  }, [coffeeList, i18next.language]);

  const getUniqueIngredientsList = () => {
    let ingredientsList = [];
    coffeeList.forEach((coffee) => ingredientsList.push(...coffee.ingredients));
    let uniqueIngredients = {};
    ingredientsList.forEach(
      (ingredient) =>
        (uniqueIngredients[ingredient] =
          (uniqueIngredients[ingredient] || 0) + 1)
    );
    return uniqueIngredients;
  };

  return (
    <div className="main">
      <h1>{t("charts")}</h1>
      <Bar data={coffeeData} />
    </div>
  );
};

export default Charts;
