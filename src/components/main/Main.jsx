import React, { Fragment } from "react";
import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Main = ({ data }) => {
  let navigate = useNavigate();
  let myData = [
    {
      name: "Core Concept",
      link: "questions",
    },
    {
      name: "MCQ's",
      link: "mcq",
    },
    {
      name: "Tutorial",
      link: "tutorial",
    },
  ];
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
        {myData.map((itm, im) => (
          <Grid item xs={12} sm={12} md={4} key={im}>
            <Card align="center">
              <CardActionArea
                onClick={() => {
                  navigate(`/${data["path"]}-${itm.link}`);
                }}
              >
                <CardContent>
                  <Box sx={{ mb: 1 }}>
                    <img src={data["img"]} alt={data["name"]} width={80} />
                  </Box>
                  <Chip
                    label={`${data["name"]} ${itm.name}`}
                    variant="outlined"
                    size="small"
                  />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default Main;
