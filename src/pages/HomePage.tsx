import React from "react";
import TourCard from "../components/TourCard";
import { Container, Grid, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import places from "../data.json";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Container maxWidth="md" sx={{ marginY: 3 }}>
        {places.map((place) => (
          <div key={place.id}>
            <Typography
              variant="h4"
              component="h2"
              key={place.id}
              marginTop={5}
            >
              {place.name}
            </Typography>
            <Grid container spacing={2}>
              {place.tours.map((tour) => (
                <Grid item xs={3} key={tour.id}>
                  <Link to={`/${place.id}/${tour.id}`}>
                    <TourCard tour={tour} />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default HomePage;
