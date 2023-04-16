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
import React from "react";

const Meal = (props) => {
  return (
    <>
      <ListItem>
        <Grid container>
          <Grid
            item
            xs={9}
            style={{
              display: "block",
              marginTop: "8px",
              marginBottom: "8px",
              marginLeft: "16px",
            }}
          >
            <Box fontWeight="bold">{props.name}</Box>
            <Box fontStyle="italic" fontSize="12px">
              {props.description}
            </Box>
            <Box fontWeight="bold" color="rgb(194, 96, 45)">
              {`  $${props.price}`}
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
                id=""
                size="small"
                margin="12px"
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
