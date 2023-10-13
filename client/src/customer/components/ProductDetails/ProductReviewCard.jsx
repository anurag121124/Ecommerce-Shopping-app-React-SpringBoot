import React from "react";
import { Grid, Box, Avatar,Rating } from "@mui/material";
const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item sx={1}>
          <Box>
            <Avatar
              classname="textwhite "
              sx={{ width: 56, height:50, bgcolor: "#9155fd" }}
            >
              R
            </Avatar>
          </Box>
        </Grid>


        <Grid item xs={9}>
          <div className=" space-y-2 ">
            <div>
              <p>Raam</p>
              <p>April 5, 2023</p>
            </div>
          </div>
          <Rating value={4.5} name='half-rating'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>

          </Rating>
          <p>Nice Product, I love this shirt</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
