import React from "react";
import Meal from "./Meal";
import { Box } from "@mui/material";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const DummyMeals = () => {
  const meals = DUMMY_MEALS.map((meal) => (
    <Meal
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <Box
      width="60%"
      backgroundColor="white"
      mt="8rem"
      ml="20%"
      style={{ display: "flex", justifyContent: "flex-start" }}
      borderRadius={4}
    >
      <ul>{meals}</ul>;
    </Box>
  );
};

export default DummyMeals;
