import React, { useCallback } from "react";

const SearchForm = ({ value, onSubmit, onReset, onChange }) => {
  const handleChangeInput = useCallback((e) => {
    onChange(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit(value);
    },
    [onSubmit, value]
  );

  const handleReset = useCallback(() => {
    onReset();
  }, [onReset]);

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <input
        type="text"
        placeholder="검색어를 입력하세요."
        value={value}
        onChange={handleChangeInput}
        autoFocus
      />
      {value.length > 0 && <button type="reset" className="btn-reset"></button>}
    </form>
  );
};

export default SearchForm;
