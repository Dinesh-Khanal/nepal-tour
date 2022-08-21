import React from "react";
import { Paper, Box, Typography, Grid, Rating } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import styled from "@emotion/styled";
import { AccessTime } from "@mui/icons-material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "body2" },
          style: {
            fontSize: 11,
          },
        },
        {
          props: { variant: "body1" },
          style: {
            fontSize: 8,
          },
        },
      ],
    },
  },
});
interface IProps {
  tour: {
    id: number;
    name: string;
    duration: string;
    rating: number;
    numberOfReviews: number;
    price: number;
    image: string;
  };
}

const TourCard = ({ tour }: IProps) => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Box>
          <Paper elevation={2}>
            <Image src={tour.image} alt={tour.name} />
            <Box paddingX={1}>
              <Typography variant="subtitle2">{tour.name}</Typography>
              <SubContent>
                <AccessTime sx={{ width: 12.5 }} />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  {tour.duration}
                </Typography>
              </SubContent>
              <SubContent>
                <Rating
                  name="read-only"
                  value={tour.rating}
                  readOnly
                  precision={0.5}
                  size="small"
                />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  {tour.rating}
                </Typography>
                <Typography variant="body1" marginLeft={0.5}>
                  ({tour.numberOfReviews} reviews)
                </Typography>
              </SubContent>
              <Typography variant="h6" component="h3">
                Cost Rs {tour.price}
              </Typography>
            </Box>
          </Paper>
        </Box>
      </ThemeProvider>
    </Grid>
  );
};
export default TourCard;

/** TourCard styled components */
const Image = styled.img({
  width: "100%",
  height: 100,
});
const SubContent = styled.div({
  display: "flex",
  alignItems: "center",
});
