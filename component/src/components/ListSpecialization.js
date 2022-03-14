import React, { useCallback } from "react";
import { formatRelativeDate } from "../helpers";

const List = ({ data, onClick, hasIndex, hasDate, onRemove }) => {
  const handleClickRemove = useCallback((e, keyword) => {
    e.stopPropagation();
    onRemove(keyword);
  }, []);

  return (
    <ul className="list">
      {data.map((item, idx) => (
        <li key={item.id} onClick={() => onClick(item.keyword)}>
          {hasIndex && <span className="number">{idx + 1}</span>}
          <span>{item.keyword}</span>
          {hasDate && (
            <span className="date">{formatRelativeDate(item.date)}</span>
          )}
          {!!onRemove && (
            <button
              className="btn-remove"
              onClick={(e) => handleClickRemove(e, item.keyword)}
            ></button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
