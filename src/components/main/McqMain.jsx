import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark as docco } from "react-syntax-highlighter/dist/esm/styles/prism";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import { ExpandMoreIcon } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const McqMain = ({ mcqs }) => {
  return (
    <div>
      {mcqs.map((mcq, i) => (
        <Card key={i} sx={{ mb: 2, p: 2 }}>
          <Box sx={{ display: "flex" }}>
            <Avatar
              sx={{
                width: 23,
                height: 23,
                bgcolor: "#FE414D",
                fontSize: 10,
                mr: 1,
              }}
            >
              {i + 1}
            </Avatar>
            <Typography style={{ color: "#079FFF", fontSize: 16 }} variant="h6">
              {mcq["question"]}
            </Typography>
          </Box>
          {mcq["qstnCodeTrue"] && (
            <Box>
              <SyntaxHighlighter
                lineProps={{
                  style: {
                    wordBreak: "break-all",
                    whiteSpace: "pre-wrap",
                    fontSize: 14,
                    padding: 0,
                  },
                }}
                wrapLines={true}
                language="jsx"
                style={docco}
              >
                {mcq["qstnCode"]}
              </SyntaxHighlighter>
            </Box>
          )}
          {mcq["optionsCodeTrue"] ? (
            <Fragment>
              <ol type="A">
                {mcq["optionCodes"].map((opc, opi) => (
                  <li key={opi} style={{ maxWidth: 700 }}>
                    <SyntaxHighlighter
                      lineProps={{
                        style: {
                          wordBreak: "break-all",
                          whiteSpace: "pre-wrap",
                          fontSize: 14,
                        },
                      }}
                      wrapLines={true}
                      language="jsx"
                      width={20}
                      //   style={docco}
                    >
                      {opc["optionCode"]}
                    </SyntaxHighlighter>
                  </li>
                ))}
              </ol>
            </Fragment>
          ) : (
            <Fragment>
              <ol type="A">
                {mcq["options"].map((op, opi) => (
                  <li key={opi}>{op["option"]}</li>
                ))}
              </ol>
            </Fragment>
          )}
          <CardActions disableSpacing></CardActions>
          <Collapse
            //   in={expanded}
            in={true}
            timeout="auto"
            unmountOnExit
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga alias
            nemo iure, sunt ab in? Officiis beatae laudantium saepe reiciendis
            animi facilis itaque quae, culpa, possimus consequuntur laborum,
            fugiat magni.
          </Collapse>
        </Card>
      ))}
    </div>
  );
};

export default McqMain;
