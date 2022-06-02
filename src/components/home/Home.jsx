import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import "./Home.scss";
import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../layout/LoadingScreen";

const Home = () => {
  let navigate = useNavigate();
  const { topics, loading } = useSelector((state) => state.topicsAll);
  return (
    <Fragment>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          alignItems="center"
        >
          {topics.map((topic) => (
            <Grid item xs={2} sm={4} md={3} key={topic.ID}>
              <Card align="center">
                <CardActionArea
                  onClick={() => {
                    navigate(`/${topic.path}`);
                  }}
                >
                  <CardContent>
                    <img src={topic.logo} alt={topic.topic} width={80} />
                    <Typography color="text.secondary">
                      {topic.topic}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Fragment>
  );
};

export default Home;
