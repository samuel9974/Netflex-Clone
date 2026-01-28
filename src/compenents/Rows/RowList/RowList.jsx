import React from "react";
import Row from "../Row/Row.jsx";
import requests from "../../../utils/requests";

const RowList = () => {
  return (
    <div>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
    </div>
  );
};

export default RowList;
