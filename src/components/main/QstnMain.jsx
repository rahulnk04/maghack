import React, { Fragment } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark as docco } from "react-syntax-highlighter/dist/esm/styles/prism";
import Card from "@mui/material/Card";
import DynamicTable from "../layout/DynamicTable";

const QstnMain = ({ topics, qstns, topicsTrue, lang }) => {
  return (
    <Fragment>
      {topicsTrue && (
        <Fragment>
          <Typography
            variant="overline"
            sx={{ color: "#fe414d", fontWeight: "bold" }}
          >
            Key Concepts covered includes following
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={{ xs: 1, sm: 1, md: 1 }}
          >
            {topics.map((r, i) => (
              <Chip color="error" label={r.name} variant="outlined" key={i} />
            ))}
            <Chip label={`Total Question - ${qstns.length}`} color="error" />
          </Stack>
        </Fragment>
      )}

      {qstns.map((r, i) => (
        <Card key={i} sx={{ p: 2, m: 1 }} elevation={5}>
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
            <Typography style={{ color: "#FE414D", fontSize: 16 }} variant="h6">
              {r["question"]}
            </Typography>
          </Box>

          <Box sx={{ color: "#000", mt: 1 }}>
            <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
              {r["answer"]}
            </Typography>
          </Box>
          {r["bulletsTrue"] && (
            <Box>
              <ul className="text-muted">
                {r["bullets"].map((b, bi) => (
                  <li key={bi}>
                    <Typography sx={{ whiteSpace: "pre-line" }} variant="body2">
                      {b}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Box>
          )}
          {r["codeTrue"] && (
            <Fragment>
              {r["codes"].map((c, ci) => (
                <Box key={ci}>
                  <Box sx={{ color: "#5d279b" }}>
                    <Typography
                      variant="caption"
                      sx={{ fontSize: 13, fontWeight: "bold" }}
                    >
                      {c["codeHead"]}
                    </Typography>
                  </Box>
                  <SyntaxHighlighter
                    lineProps={{
                      style: {
                        wordBreak: "break-all",
                        whiteSpace: "pre-wrap",
                        fontSize: 12,
                      },
                    }}
                    wrapLines={true}
                    language={c["language"]}
                    style={docco}
                  >
                    {c["code"]}
                  </SyntaxHighlighter>
                </Box>
              ))}
            </Fragment>
          )}
          {r["hasTable"] && (
            <DynamicTable
              columns={r["table"]["tableHead"]}
              data={r["table"]["tableBody"]}
            />
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
                  <span style={{ color: "#079fff" }}>{img["imageHead"]}</span>
                </Box>
              ))}
            </Fragment>
          )}
        </Card>
      ))}
    </Fragment>
  );
};

export default QstnMain;
