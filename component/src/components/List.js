import React, { useCallback, useEffect, useState } from "react";
import store from "../Store";
import { formatRelativeDate } from "../helpers";

const List = ({ type, onSearch }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (type === "keyword") {
      setData(store.getKeywordList());
    } else {
      setData(store.getHistoryList());
    }
  }, [type]);

  const onRemoveHistory = useCallback((e, keyword) => {
    e.stopPropagation();

    store.removeHistory(keyword);
    setData(store.getHistoryList());
  }, []);

  return (
    <ul className="list">
      {data.map((item, idx) => (
        <Item
          type={type}
          key={item.id}
          idx={idx}
          item={item}
          onClick={() => onSearch(item.keyword)}
          onReset={(e) => onRemoveHistory(e, item.keyword)}
        />
      ))}
    </ul>
  );
};

const Item = ({ type, item, idx, onClick, onReset }) => {
  const renderItem = useCallback(() => {
    if (type === "keyword") {
      return (
        <>
          <span className="number">{idx + 1}</span>
          <span>{item.keyword}</span>
        </>
      );
    }
    return (
      <>
        <span>{item.keyword}</span>
        <span className="date">{formatRelativeDate(item.date)}</span>
        <button className="btn-remove" onClick={onReset}></button>
      </>
    );
  }, [type, item, onReset]);

  return <li onClick={() => onClick(item.keyword)}>{renderItem()}</li>;
};

export default List;
