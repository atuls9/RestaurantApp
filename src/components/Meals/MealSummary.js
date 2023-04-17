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
        backgroundColor: "#3F3F3F",
        position: "absolute",
        borderRadius: "1rem",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" color="white" fontWeight="bold">
        Delicius Food, Delivered To You
      </Typography>
      <Typography variant="subtitle" color="white" mx={4} mt={2}>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </Typography>
      <Typography variant="subtitle" color="white" mx={4} mt={2}>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </Typography>
    </Paper>
  );
};

export default MealSummary;
