import React, { useCallback } from "react";

export const TabType = {
  KEYWORD: "KEYWORD",
  HISTORY: "HISTORY",
};

const TabLabel = {
  [TabType.KEYWORD]: "추천 검색어",
  [TabType.HISTORY]: "최근 검색어",
};

const Tabs = ({ selectedTab, onChange }) => {
  return (
    <>
      <ul className="tabs">
        {Object.values(TabType).map((tabType) => (
          <li
            key={tabType}
            onClick={() => onChange(tabType)}
            className={selectedTab === tabType ? "active" : ""}
          >
            {TabLabel[tabType]}
          </li>
        ))}
      </ul>
      {/* {selectedTab === TabType.KEYWORD && keywordList}
      {selectedTab === TabType.HISTORY && historyList} */}
    </>
  );
};

export default Tabs;
