import React, { useState, useCallback, useEffect } from "react";
import store from "./Store";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";
import Tabs, { TabType } from "./components/Tabs";
// import KeywordList from "./components/KeywordList";
import KeywordList from "./components/KeywordListSpecialization";
// import HistoryList from "./components/HistoryList";
import HistoryList from "./components/HistoryListSpecialization";

const App = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selectedTab, setSelectedTab] = useState(TabType.KEYWORD);

  const onChangeInput = useCallback((value) => {
    if (searchKeyword.length < 1) {
      onReset();
    }

    setSearchKeyword(value);
  }, []);

  const onChangeTabs = useCallback((selectedTab) => {
    setSelectedTab(selectedTab);
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
    setSearchKeyword(searchKeyword);
    setSearchResult(searchResult);
    setSubmitted(true);
  }, []);

  return (
    <>
      <Header title="검색" />
      <div className="container">
        <SearchForm
          value={searchKeyword}
          onChange={onChangeInput}
          onSubmit={onSubmit}
          onReset={onReset}
        />
        <div className="content">
          {submitted ? (
            <SearchResult data={searchResult} />
          ) : (
            <>
              <Tabs selectedTab={selectedTab} onChange={onChangeTabs} />
              {selectedTab === TabType.KEYWORD ? (
                <KeywordList onClick={(keyword) => onSearch(keyword)} />
              ) : (
                <HistoryList onClick={(keyword) => onSearch(keyword)} />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
