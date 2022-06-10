import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCssQstns } from "../../../redux/actions/actions";
import LoadingScreen from "../../layout/LoadingScreen";
import QstnMain from "../QstnMain";

const CssLearn = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const { cssqstns, cssqstnsloading, cssqstnserror } = useSelector(
    (state) => state.cssAll
  );
  useEffect(() => {
    dispatch(getCssQstns());
  }, [dispatch]);
  return (
    <Fragment>
      {cssqstnsloading ? (
        <LoadingScreen />
      ) : (
        <QstnMain
          topics={[]}
          qstns={cssqstns}
          topicsTrue={false}
          lang={"css"}
        />
      )}
    </Fragment>
  );
};

export default CssLearn;
