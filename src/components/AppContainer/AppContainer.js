import React, { useState, useEffect } from 'react';
import TabContainer from '../TabContainer/TabContainer';
import Header from '../Header/Header';
import { getTabs } from '../../services/TabContentService';
import './AppContainer.scss';

function AppContainer() {
  const [tabs, setTabs] = useState([]);

  // fetch tab items
  useEffect(() => {
    getTabs()
      .then(items => {
        setTabs(items)
      })
  }, []);

  return (
    <div className="app__container">
      <Header />
      <TabContainer
        tabList={tabs}
      />
    </div>
  );
}

export default AppContainer;