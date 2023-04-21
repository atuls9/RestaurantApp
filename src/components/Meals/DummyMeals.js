import React from "react";
import Meal from "./Meal";
import { Box, List } from "@mui/material";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 450.5,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 260.7,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 200,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 170.99,
  },
];

const DummyMeals = () => {
  const meals = DUMMY_MEALS.map((meal) => (
    <Meal key={meal.id} id={meal.id} item={meal} />
  ));
  return (
    <Box
      width="60%"
      backgroundColor="white"
      mt="8rem"
      ml="20%"
      borderRadius={4}
    >
      <List>{meals}</List>
    </Box>
  );
};

export default DummyMeals;
