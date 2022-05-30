import React, { Fragment, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTopics } from "./redux/actions/actions";
import Home from "./components/home/Home";
import "./App.css";
import Wrapper from "./components/layout/Wrapper";
import ReactLearn from "./components/main/react/ReactLearn";
import AngularLearn from "./components/main/angular/AngularLearn";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopics());
  }, [dispatch]);
  return (
    <Fragment>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/react" element={<ReactLearn />} />
            <Route exact path="/angular" element={<AngularLearn />} />
            <Route exact path="/*" element={<div>Not Found</div>} />
          </Route>

          {/* <Route exact path="/resume" element={<Resume />} /> */}
          {/* <Route path="/reward/:id" element={<Rewardpdf />} /> */}
        </Routes>
      </HashRouter>
    </Fragment>
  );
};

export default App;
