import React, { useContext } from "react";
import CartContext from "../../store/cartContext";
import {
  Box,
  ListItem,
  Grid,
  Button,
  Divider,
  Typography,
  Stack,
  TextField,
} from "@mui/material";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemHandler = (item) => {
    const existingCartItemIndex = cartCtx.items.findIndex(
      (el) => el.id === item.id
    );

    const existingCartItem = cartCtx.items[existingCartItemIndex];
    console.log(existingCartItem);
    const updatedItem = {
      ...existingCartItem,
      amount: 1,
    };

    cartCtx.addItem(updatedItem);
  };
  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  let total = 0;
  const items = cartCtx.items.map((item) => {
    total = total + item.price * item.amount;

    return (
      <>
        <ListItem>
          <Grid container>
            <Grid item xs={9}>
              <Box>{item.name}</Box>
              <Stack direction="row" spacing={3}>
                <Stack fontWeight="bold" color="rgb(194, 96, 45)">
                  {`  ₹${item.price.toFixed(2)}`}
                </Stack>
                <Stack>
                  {" "}
                  <TextField
                    id={"DefaultItem"}
                    value={item.amount}
                    // inputRef={inputRef}
                    size="small"
                    margin="12px"
                    type="number"
                    style={{
                      float: "right",
                    }}
                    sx={{
                      width: "40px",
                      "& .MuiInputBase-input": {
                        padding: "1px",
                        marginLeft: "4px",
                      },
                    }}
                  />
                </Stack>
              </Stack>
            </Grid>
            <Grid>
              <Stack direction="row" alighItems="center">
                <Stack>
                  <Button
                    variant="outlined"
                    size="small"
                    color="error"
                    onClick={() => removeItemHandler(item.id)}
                    sx={{
                      "& 	.MuiButton-root": {
                        fontStyle: "bold",
                      },
                    }}
                  >
                    {" "}
                    -{" "}
                  </Button>
                </Stack>
                <Stack>
                  <Button
                    variant="contained"
                    size="small"
                    id={item.id}
                    color="error"
                    fontWeight="1000"
                    onClick={() => addItemHandler(item)}
                    sx={{
                      "& .MuiButtonBase-root": {
                        fontWeight: "1000",
                      },
                    }}
                  >
                    {" "}
                    +{" "}
                  </Button>
                </Stack>
              </Stack>
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
      <Grid container paddingRight="16px" paddingLeft="16px">
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
          onClick={() => props.setCloseCart()}
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
