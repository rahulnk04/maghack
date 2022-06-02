import React, { Fragment } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark as docco } from "react-syntax-highlighter/dist/esm/styles/prism";

const QstnMain = ({ topics, qstns }) => {
  return (
    <Fragment>
      <Typography
        variant="overline"
        sx={{ color: "#079FFF", fontWeight: "bold" }}
      >
        Key Concepts covered includes following
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        spacing={{ xs: 1, sm: 1, md: 1 }}
      >
        {topics.map((r, i) => (
          <Chip color="primary" label={r.name} variant="outlined" key={i} />
        ))}
        <Chip label={`Total Question - ${qstns.length}`} color="primary" />
      </Stack>
      {qstns.map((r, i) => (
        <Box key={i} sx={{ mt: 3 }}>
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
              {r["question"]}
            </Typography>
          </Box>

          <Box sx={{ color: "#000", mt: 1 }}>
            <Typography variant="body2">{r["answer"]}</Typography>
          </Box>
          {r["bulletsTrue"] && (
            <Box>
              <ul className="text-muted">
                {r["bullets"].map((b, bi) => (
                  <li key={bi}>
                    <Typography variant="body2">{b}</Typography>
                  </li>
                ))}
              </ul>
            </Box>
          )}
          {r["codeTrue"] && (
            <Fragment>
              {r["codes"].map((c, ci) => (
                <Box key={ci}>
                  <Box sx={{ color: "#FE414D" }}>
                    <Typography variant="caption" sx={{ fontSize: 13 }}>
                      {c["codeHead"]}
                    </Typography>
                  </Box>
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
                    style={docco}
                  >
                    {c["code"]}
                  </SyntaxHighlighter>
                </Box>
              ))}
            </Fragment>
          )}
          {r["imageTrue"] && (
            <Fragment>
              {r["images"].map((img, imi) => (
                <Box key={imi}>
                  <img
                    className="img-fluid"
                    src={img["image"]}
                    alt={img["image"]}
                  />
                  <br />
                  <span style={{ color: "#FE414D" }}>{img["imageHead"]}</span>
                </Box>
              ))}
            </Fragment>
          )}
        </Box>
      ))}
    </Fragment>
  );
};

export default QstnMain;
