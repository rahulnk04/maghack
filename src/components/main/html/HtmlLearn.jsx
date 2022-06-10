import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHtmlQstns } from "../../../redux/actions/actions";
import LoadingScreen from "../../layout/LoadingScreen";
import QstnMain from "../QstnMain";

const HtmlLearn = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const { htmlqstns, htmlqstnsloading, htmlqstnserror } = useSelector(
    (state) => state.htmlAll
  );
  useEffect(() => {
    dispatch(getHtmlQstns());
  }, [dispatch]);
  return (
    <Fragment>
      {htmlqstnsloading ? (
        <LoadingScreen />
      ) : (
        <QstnMain
          topics={[]}
          qstns={htmlqstns}
          topicsTrue={false}
          lang={"markup"}
        />
      )}
    </Fragment>
  );
};

export default HtmlLearn;
