import React, { useCallback, useEffect, useState } from "react";
import List from "./ListSpecialization";
import store from "../Store";

const HistoryList = ({ onClick }) => {
  const [data, setData] = useState([]);

  const onRemoveHistory = useCallback((keyword) => {
    store.removeHistory(keyword);
    setData(store.getHistoryList());
  }, []);

  useEffect(() => {
    setData(store.getHistoryList());
  }, []);

  return (
    <List data={data} onClick={onClick} onRemove={onRemoveHistory} hasDate />
  );
};

export default HistoryList;
