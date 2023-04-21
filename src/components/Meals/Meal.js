import React, { useContext } from "react";
import {
  ListItem,
  Box,
  Divider,
  TextField,
  Grid,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import CartContext from "../../store/cartContext";

const Meal = (props) => {
  const cartCtx = useContext(CartContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const quantity = document.getElementById(`Amount_${props.id}`).value;
    cartCtx.addItem({ ...props.item, amount: quantity });
    document.getElementById(`Amount_${props.id}`).value = 1;
    // console.log(cartCtx);
  };
  return (
    <>
      {/* {console.log("inside render", cartCtx)} */}
      <ListItem>
        <Grid container>
          <Grid
            item
            xs={8}
            style={{
              display: "block",
              marginTop: "8px",
              marginBottom: "8px",
              marginLeft: "16px",
            }}
          >
            <Box fontWeight="bold">{props.item.name}</Box>
            <Box fontStyle="italic" fontSize="12px">
              {props.item.description}
            </Box>
            <Box fontWeight="bold" color="rgb(194, 96, 45)">
              {`  $${props.item.price}`}
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            style={{
              alignSelf: "center",
              justifyContent: "center",
              marginLeft: "auto",
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              style={{
                marginBottom: "5px",
              }}
            >
              <Typography alignSelf="center" fontWeight="bold">
                Amount
              </Typography>

              <TextField
                id={`Amount_${props.id}`}
                size="small"
                margin="12px"
                defaultValue="1"
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
            <Button
              color="error"
              onClick={submitHandler}
              variant="contained"
              style={{
                marginTop: "1px",
                marginLeft: "20px",
                borderRadius: "18px",
                padding: "1px",
              }}
            >
              + Add
            </Button>
          </Grid>
        </Grid>
      </ListItem>

      <Divider />
    </>
  );
};

export default Meal;
