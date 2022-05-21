import React, { useState, useEffect } from 'react';
import TabContainer from './components/TabContainer/TabContainer';
import { getTabs } from './services/TabContentService';
import './App.css';

function App() {
  const [tabs, setTabs] = useState([]);

  // fetch tab items
  useEffect(() => {
    getTabs()
      .then(items => {
        setTabs(items)
      })
  }, []);

  const key = `${tabs.length + Math.random()}`;
  return (
    <div className="App">
      <TabContainer
        key={key}
        tabList={tabs}
      />
    </div>
  );
}

export default App;
