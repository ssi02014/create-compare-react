import React, { useState, useCallback } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";

const App = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const onChange = useCallback((value) => {
    if (searchKeyword.length < 1) {
      onReset();
    }

    setSearchKeyword(value);
  }, []);

  const onSubmit = useCallback((searchKeyword) => {
    console.log(searchKeyword);
  }, []);

  const onReset = useCallback(() => {
    setSearchKeyword("");
  }, []);

  return (
    <>
      <Header title="검색" />
      <div className="container">
        <SearchForm
          value={searchKeyword}
          onChange={onChange}
          onSubmit={onSubmit}
          onReset={onReset}
        />
      </div>
    </>
  );
};

export default App;
