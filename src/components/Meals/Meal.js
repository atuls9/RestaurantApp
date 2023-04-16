import {
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import React from "react";

const Meal = (props) => {
  return (
    <>
      <List>
        <ListItem disablePadding disableGutters>
          <ListItemButton
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <ListItemText
              style={{
                marginLeft: "1px",
                display: "flex",
                flexDirection: "flex-start",
                fontWeight: "bolder",
              }}
            >{`${props.name}`}</ListItemText>
            <ListItemText
              style={{
                marginLeft: "1px",
                display: "flex",
                flexDirection: "flex-start",
                fontStyle: "italic",
              }}
            >{` ${props.description}`}</ListItemText>

            <ListItemText primary={`$${props.price}`} color="error" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </>
  );
};

export default Meal;
