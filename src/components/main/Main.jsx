import React, { Fragment } from "react";
import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Main = ({ data }) => {
  let navigate = useNavigate();
  return (
    <Fragment>
      {" "}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ color: "#079FFF" }}>
          What is {data.name} ?
        </Typography>
        <Typography variant="body2" color={"text.secondary"}>
          {data.desc}
        </Typography>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        alignItems="center"
        alignContent="center"
      >
        <Grid item xs={2} sm={4} md={4}>
          <Card align="center">
            <CardActionArea
              onClick={() => {
                navigate(`/${data["path"]}-questions`);
              }}
            >
              <CardContent>
                <img src={data["img"]} alt={data["name"]} width={80} />
                <Typography color="text.secondary">
                  {data["name"]} Core Concepts
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Card align="center">
            <CardActionArea
              onClick={() => {
                navigate(`/${data["path"]}-mcq`);
              }}
            >
              <CardContent>
                <img src={data["img"]} alt={data["name"]} width={80} />
                <Typography color="text.secondary">
                  {" "}
                  {data["name"]} (MCQ's)
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Card align="center">
            <CardActionArea
              onClick={() => {
                navigate(`/${data["path"]}-tutorial`);
              }}
            >
              <CardContent>
                <img src={data["img"]} alt={data["name"]} width={80} />
                <Typography color="text.secondary">
                  {" "}
                  {data["name"]} Tutorial
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Main;
