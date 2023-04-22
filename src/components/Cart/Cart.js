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
    cartCtx.addItem({ ...item, amount: 1 });
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
              <Box fontWeight="bold">{item.name}</Box>
              <Stack direction="row" spacing={1}>
                <Stack fontWeight="bold" color="rgb(194, 96, 45)">
                  {`  ₹${item.price.toFixed(2)}`}
                </Stack>
                <Stack>X</Stack>
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
                    <Typography fontSize="1rem" fontWeight="bold">
                      -
                    </Typography>
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
                    <Typography fontSize="1rem" fontWeight="bold">
                      +
                    </Typography>
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
        <Grid item xs={7}>
          {/* {total.toFixed(2)} */}
        </Grid>
        <Grid item xs={2} sx={{ fontWeight: "bold" }}>
          {`  ₹${total.toFixed(2)}`}
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
          Close
        </Button>

        {cartCtx.items.length ? (
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
            Order
          </Button>
        ) : (
          ""
        )}
      </Grid>
    </Box>
  );
};

export default Cart;
