import React, { useCallback, useEffect, useState } from "react";
import List from "./List";
import store from "../Store";
import { formatRelativeDate } from "../helpers";

const HistoryList = ({ onClick }) => {
  const [data, setData] = useState([]);

  const onRemoveHistory = useCallback((e, keyword) => {
    e.stopPropagation();
    store.removeHistory(keyword);
    setData(store.getHistoryList());
  }, []);

  const renderItem = useCallback((item, idx) => {
    return (
      <>
        <span>{item.keyword}</span>
        <span className="date">{formatRelativeDate(item.date)}</span>
        <button
          className="btn-remove"
          onClick={(e) => onRemoveHistory(e, item.keyword)}
        ></button>
      </>
    );
  });

  useEffect(() => {
    setData(store.getHistoryList());
  }, []);

  return <List data={data} renderItem={renderItem} onClick={onClick} />;
};

export default HistoryList;
