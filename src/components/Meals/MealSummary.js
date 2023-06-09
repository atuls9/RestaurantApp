import { Typography, Paper } from "@mui/material";

import React from "react";

const MealSummary = () => {
  return (
    <Paper
      elevation={12}
      style={{
        height: "14rem",
        width: "40%",
        display: "flex",
        marginTop: "-7rem",
        marginLeft: "30%",
        backgroundColor: "#FFFBDD",
        position: "absolute",
        borderRadius: "1rem",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h4"
        color="black"
        textAlign="center"
        fontWeight="bold"
        mt={1}
        mx={2}
      >
        Delicius Food, Delivered To You
      </Typography>
      <Typography
        variant="subtitle"
        color="black"
        mt={2}
        mx={3}
        textAlign="center"
      >
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </Typography>
      <Typography
        variant="subtitle"
        color="black"
        textAlign="center"
        mx={3}
        mt={2}
      >
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </Typography>
    </Paper>
  );
};

export default MealSummary;
