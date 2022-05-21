
import React, { useState} from "react";
import Tab from "../Tab/Tab";
import './TabContainer.scss';

// tab container component, displays list of tabs
function TabContainer({ tabList }) {
  const [selectedTab, setSelectedTab] = useState({ selectedTab: {} });

  if (!selectedTab["id"] && tabList && tabList.length > 0) {
    setSelectedTab({ id: tabList[0].id, content: tabList[0].content });
  }
  
  return (
    <div className="tab__container">
      <div className="tab__container--header">
        {tabList && tabList.length > 0 && tabList.map((tab) => {
            return (
              <div
                key={`${tab.id}`}
                className={`tab__container--header-link${selectedTab && selectedTab.id === tab.id ? '-active' : ''}`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab.id}
              </div>
            );
          })}
      </div>
      <div className="tab__container--body">
        {selectedTab && (
          <Tab
            key={`${selectedTab.id + Math.random}`}
            tabId={selectedTab.id}
            tabContent={selectedTab.content}
          />
        )}
      </div>
    </div>
  );
}

export default TabContainer;