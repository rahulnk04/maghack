import React, { Fragment, useEffect } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark as docco } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useSelector, useDispatch } from "react-redux";
import { getReactTopics, getReactQstns } from "../../../redux/actions/actions";

const ReactLearn = () => {
  const dispatch = useDispatch();
  const { reacttopics, reacttopicloading, reacttopicerror } = useSelector(
    (state) => state.reactTopicsAll
  );
  const { reactqstns, reactqstnsloading, reactqstnserror } = useSelector(
    (state) => state.reactQstnsAll
  );
  useEffect(() => {
    getResult();
  }, [dispatch]);

  const getResult = async () => {
    await dispatch(getReactTopics());
    await dispatch(getReactQstns());
  };
  return (
    <Fragment>
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        spacing={{ xs: 1, sm: 1, md: 1 }}
      >
        {reacttopics.map((r, i) => (
          <Chip
            color="info"
            label={r.name}
            id={r.Id}
            key={i}
            onClick={() => {
              alert("comming");
            }}
          />
        ))}
        <Chip
          label={`Total Question - ${reactqstns.length}`}
          //   variant="outlined"
          color="primary"
          onClick={() => {
            alert("comming");
          }}
        />
      </Stack>
      {reactqstns.map((r, i) => (
        <Box key={i} sx={{ mt: 3 }}>
          <Box sx={{ display: "flex" }}>
            <Avatar
              sx={{
                width: 20,
                height: 20,
                bgcolor: "#FE414D",
                fontSize: 14,
                mr: 1,
              }}
            >
              {i + 1}
            </Avatar>
            <h6 style={{ color: "#079FFF" }}>
              {/* {"("}
            {i + 1} */}

              {/* {")"}- */}
              {r["question"]}
            </h6>
          </Box>

          <Box sx={{ color: "#000", mt: 1 }}>{r["answer"]}</Box>
          {r["bulletsTrue"] && (
            <div>
              <ul className="text-muted">
                {r["bullets"].map((b, bi) => (
                  <li key={bi}>{b}</li>
                ))}
              </ul>
            </div>
          )}
          {r["codeTrue"] && (
            <div>
              {r["codes"].map((c, ci) => (
                <div key={ci}>
                  <Box sx={{ color: "#FE414D" }}>{c["codeHead"]}</Box>
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
                </div>
              ))}
            </div>
          )}
          {r["imageTrue"] && (
            <div>
              {r["images"].map((img, imi) => (
                <div key={imi}>
                  <img
                    className="img-fluid"
                    src={img["image"]}
                    alt={img["image"]}
                  />
                  <br />
                  <span style={{ color: "#FE414D" }}>{img["imageHead"]}</span>
                </div>
              ))}
            </div>
          )}
        </Box>
      ))}
    </Fragment>
  );
};

export default ReactLearn;
