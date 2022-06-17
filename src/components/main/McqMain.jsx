import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark as docco } from "react-syntax-highlighter/dist/esm/styles/prism";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const McqMain = ({ mcqs }) => {
  return (
    <div>
      {mcqs.map((mcq, i) => (
        <Card key={i} sx={{ mb: 2, p: 2 }} elevation={5}>
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
            <Typography
              style={{ color: "#FE414D", fontSize: 16 }}
              variant="subtitle1"
            >
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
                  <li key={opi}>
                    <Typography variant="body2" color={"text.secondary"}>
                      {op["option"]}
                    </Typography>{" "}
                  </li>
                ))}
              </ol>
            </Fragment>
          )}
          <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              id="panel1a-header"
            >
              <Button className="mcq-btn" size={"small"} color="error">Check Answer</Button>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 0, mt: 0 }}>
              <Typography variant="subtitle1" sx={{ color: "#fe414d" }}>
                {mcq["answer"]}
              </Typography>
              <Typography variant="subtitle2">{mcq["desc"]}</Typography>
              {mcq["answerCodeTrue"] && (
                <Box sx={{ maxWidth: 720 }}>
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
                  >
                    {mcq["answerCode"]}
                  </SyntaxHighlighter>
                </Box>
              )}
            </AccordionDetails>
          </Accordion>
        </Card>
      ))}
    </div>
  );
};

export default McqMain;
