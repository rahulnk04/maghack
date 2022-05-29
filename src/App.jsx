import React, { Fragment, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTopics } from "./redux/actions/actions";
import Home from "./components/home/Home";
import "./App.css";
import Wrapper from "./components/layout/Wrapper";


const App = () => {

  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.topicsAll);

  useEffect(() => {
    dispatch(getTopics());
  }, [dispatch, error]);
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
