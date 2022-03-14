import React, { useCallback, useEffect, useState } from "react";
import List from "./List";
import store from "../Store";

const KeywordList = ({ onClick }) => {
  const [data, setData] = useState([]);

  const renderItem = useCallback((item, idx) => {
    return (
      <>
        <span className="number">{idx + 1}</span>
        <span>{item.keyword}</span>
      </>
    );
  });

  useEffect(() => {
    setData(store.getKeywordList());
  }, []);

  return <List data={data} renderItem={renderItem} onClick={onClick} />;
};

export default KeywordList;
