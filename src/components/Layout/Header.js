import React from "react";
import { Grid, Paper, Box, Button, Chip } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = (props) => {
  const showCart = () => {
    props.setOpen(true);
  };

  return (
    <Paper
      style={{
        height: "200px",
        backgroundImage:
          "url('https://images.pexels.com/photos/5779170/pexels-photo-5779170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundPositionY: "center",
        margin: "10px",

        marginTop: "20px",
      }}
      elevation={8}
    >
      <Grid item xs={12} sm={6}>
        <Box bgcolor="error.light" height="50px">
          <Chip
            label=" ReactMeals "
            style={{
              fontWeight: "bold",
              fontSize: "25px",
              //   marginBottom: "3px",
              marginTop: "10px",
              marginLeft: "50px",
              float: "left",
              backgroundColor: "transparent",
              color: "white",
            }}
          />
          <Button
            color="error"
            style={{
              float: "right",
              borderRadius: "20px",
              marginTop: "8px",
              marginRight: "20px",
              paddingLeft: "30px",
              paddingRight: "30px",
            }}
            onClick={showCart}
            variant="contained"
            size="small"
          >
            <ShoppingCartIcon /> Your Cart
            <Chip label="0" color="secondary" size="small" />
          </Button>
        </Box>
      </Grid>
    </Paper>
  );
};

export default Header;
