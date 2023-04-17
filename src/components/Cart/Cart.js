import React from "react";
import {
  Box,
  ListItem,
  Grid,
  Button,
  Divider,
  Typography,
} from "@mui/material";

const itemList = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 25,
    amount: 2,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 25,
    amount: 3,
  },
];

const Cart = () => {
  let total = 0;
  const items = itemList.map((item) => {
    total = total + item.price * item.amount;

    return (
      <>
        <ListItem>
          <Grid container>
            <Grid item xs={8}>
              <Box>{item.name}</Box>
            </Grid>
          </Grid>
        </ListItem>
        <Divider />
      </>
    );
  });
  return (
    <Box
      width="40%"
      backgroundColor="white"
      mt="8rem"
      ml="30%"
      borderRadius={4}
    >
      <Grid>{items}</Grid>
      <Grid container paddingRight="16px">
        <Grid item xs={3} sx={{ justifyContent: "flex-start" }}>
          <Typography fontWeight="bold">Total Amount</Typography>
        </Grid>
        <Grid item xs={8}>
          {/* {total.toFixed(2)} */}
        </Grid>
        <Grid item xs={1}>
          {total.toFixed(2)}
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          paddingTop: "4px",
          paddingRight: "16px",
          paddingBottom: "16px",
          justifyContent: "flex-end",
        }}
      >
        <Button
          color="error"
          variant="outlined"
          size="small"
          style={{
            marginTop: "1px",
            marginLeft: "20px",
            borderRadius: "24px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          close
        </Button>
        <Button
          color="error"
          variant="contained"
          size="small"
          style={{
            marginTop: "1px",
            marginLeft: "10px",
            borderRadius: "24px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          order
        </Button>
      </Grid>
    </Box>
  );
};

export default Cart;
