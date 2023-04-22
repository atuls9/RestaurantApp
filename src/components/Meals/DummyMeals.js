import React from "react";
import Meal from "./Meal";
import { Box, List } from "@mui/material";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Shahi Paneer ",
    description: " Deliciously flavorful, aromatic, rich and creamy,",
    price: 450.5,
  },
  {
    id: "m2",
    name: "Hakka Noodles",
    description:
      " Hakka noodles is a popular Indo-Chinese dish of stir fried noodles.",
    price: 260.7,
  },
  {
    id: "m3",
    name: "Burger",
    description: "American, raw, meaty",
    price: 200,
  },
  {
    id: "m4",
    name: "Hyderabadi Biryani",
    description: "Aromatic, mouth watering and  chicken in layers of rice.",
    price: 400.5,
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
