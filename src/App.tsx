import React from "react";
import TourCard from "./components/TourCard";
import { Container, Grid, Typography } from "@mui/material";
import NavBar from "./components/NavBar";
import places from "./data.json";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Container maxWidth="md" sx={{ marginY: 3 }}>
        {places.map((place) => (
          <div>
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
                <TourCard tour={tour} key={tour.id} />
              ))}
            </Grid>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default App;
