import React, { Fragment, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTopics } from "./redux/actions/actions";
import Home from "./components/home/Home";
import "./App.css";
import Wrapper from "./components/layout/Wrapper";
import ReactLearn from "./components/main/react/ReactLearn";
import ReactMain from "./components/main/react/ReactMain";
import ReactMCQ from "./components/main/react/ReactMCQ";
// import ReactTutorial from "./components/main/react/ReactTutorial";

// import AngularLearn from "./components/main/angular/AngularLearn";
import UnderConstruction from "./components/layout/UnderConstruction";

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
            <Route exact path="/react" element={<ReactMain />} />
            <Route exact path="/react-questions" element={<ReactLearn />} />
            <Route exact path="/react-mcq" element={<ReactMCQ />} />
            {/* <Route exact path="/react-tutorial" element={<ReactTutorial />} /> */}

            {/* <Route exact path="/angular" element={<AngularLearn />} /> */}

            <Route exact path="/*" element={<UnderConstruction />} />
          </Route>

          {/* <Route exact path="/resume" element={<Resume />} /> */}
          {/* <Route path="/reward/:id" element={<Rewardpdf />} /> */}
        </Routes>
      </HashRouter>
    </Fragment>
  );
};

export default App;
