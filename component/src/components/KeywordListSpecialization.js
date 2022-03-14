import React, { useCallback, useEffect, useState } from "react";
import List from "./ListSpecialization";
import store from "../Store";

const KeywordList = ({ onClick }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(store.getKeywordList());
  }, []);

  return <List data={data} onClick={onClick} hasIndex />;
};

export default KeywordList;
