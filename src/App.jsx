import React, { Fragment } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
// import NavMenu from "./components/layout/NavMenu";
import Home from "./components/home/Home";
import "./App.css";
import Wrapper from "./components/layout/Wrapper";

const App = () => {
  return (
    <Fragment>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
          </Route>

          {/* <Route exact path="/resume" element={<Resume />} /> */}
          {/* <Route path="/reward/:id" element={<Rewardpdf />} /> */}
        </Routes>
      </HashRouter>
    </Fragment>
  );
};

export default App;
