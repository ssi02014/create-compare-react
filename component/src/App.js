import React, { useState, useCallback } from "react";
import store from "./Store";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";

const App = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const onChange = useCallback((value) => {
    if (searchKeyword.length < 1) {
      onReset();
    }

    setSearchKeyword(value);
  }, []);

  const onSubmit = useCallback((searchKeyword) => {
    onSearch(searchKeyword);
  }, []);

  const onReset = useCallback(() => {
    setSearchKeyword("");
    setSubmitted(false);
    setSearchResult([]);
  }, []);

  const onSearch = useCallback((searchKeyword) => {
    const searchResult = store.search(searchKeyword);
    setSearchResult(searchResult);
    setSubmitted(true);
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
        <div className="content">
          {submitted && <SearchResult data={searchResult} />}
        </div>
      </div>
    </>
  );
};

export default App;
