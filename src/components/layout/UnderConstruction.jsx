import { Grid, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./UnderConstruction.scss";

const UnderConstruction = () => {
  let navigate = useNavigate();
  return (
    <div>
      <Grid align="center">
        <Button
          sx={{ color: "#24292f" }}
          onClick={() => {
            navigate("/home");
          }}
          size="small"
        >
          Click Here to go back to Home
        </Button>
      </Grid>

      <main className="myMain">
        <section className="advice">
          <h1 className="advice__title">Site under construction</h1>
        </section>
        <section className="city-stuff">
          <ul className="skyscrappers__list">
            <li className="skyscrapper__item skyscrapper-1"></li>
            <li className="skyscrapper__item skyscrapper-2"></li>
            <li className="skyscrapper__item skyscrapper-3"></li>
            <li className="skyscrapper__item skyscrapper-4"></li>
            <li className="skyscrapper__item skyscrapper-5"></li>
          </ul>
          <ul className="tree__container">
            <li className="tree__list">
              <ul className="tree__item tree-1">
                <li className="tree__trunk"></li>
                <li className="tree__leaves"></li>
              </ul>
              <ul className="tree__item tree-2">
                <li className="tree__trunk"></li>
                <li className="tree__leaves"></li>
              </ul>
              <ul className="tree__item tree-3">
                <li className="tree__trunk"></li>
                <li className="tree__leaves"></li>
              </ul>
              <ul className="tree__item tree-4">
                <li className="tree__trunk"></li>
                <li className="tree__leaves"></li>
              </ul>
              <ul className="tree__item tree-5">
                <li className="tree__trunk"></li>
                <li className="tree__leaves"></li>
              </ul>
              <ul className="tree__item tree-6">
                <li className="tree__trunk"></li>
                <li className="tree__leaves"></li>
              </ul>
              <ul className="tree__item tree-7">
                <li className="tree__trunk"></li>
                <li className="tree__leaves"></li>
              </ul>
              <ul className="tree__item tree-8">
                <li className="tree__trunk"></li>
                <li className="tree__leaves"></li>
              </ul>
            </li>
          </ul>
          <ul className="crane__list crane-1">
            <li className="crane__item crane-cable crane-cable-1"></li>
            <li className="crane__item crane-cable crane-cable-2"></li>
            <li className="crane__item crane-cable crane-cable-3"></li>
            <li className="crane__item crane-stand"></li>
            <li className="crane__item crane-weight"></li>
            <li className="crane__item crane-cabin"></li>
            <li className="crane__item crane-arm"></li>
          </ul>
          <ul className="crane__list crane-2">
            <li className="crane__item crane-cable crane-cable-1"></li>
            <li className="crane__item crane-cable crane-cable-2"></li>
            <li className="crane__item crane-cable crane-cable-3"></li>
            <li className="crane__item crane-stand"></li>
            <li className="crane__item crane-weight"></li>
            <li className="crane__item crane-cabin"></li>
            <li className="crane__item crane-arm"></li>
          </ul>
          <ul className="crane__list crane-3">
            <li className="crane__item crane-cable crane-cable-1"></li>
            <li className="crane__item crane-cable crane-cable-2"></li>
            <li className="crane__item crane-cable crane-cable-3"></li>
            <li className="crane__item crane-stand"></li>
            <li className="crane__item crane-weight"></li>
            <li className="crane__item crane-cabin"></li>
            <li className="crane__item crane-arm"></li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default UnderConstruction;
