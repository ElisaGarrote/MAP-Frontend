import React, { useState } from 'react';
import '../../styles/gile/TabsDemo.css';

const TabsDemo = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = [
    { label: 'Tab 1', key: 'tab1' },
    { label: 'Tab 2', key: 'tab2' },
    { label: 'Tab 3', key: 'tab3' },
  ];

  return (
    <div className="tabs-container">
      <nav className="tabs-nav">
        <ul className="tabs-list">
          {tabs.map((tab) => (
            <li key={tab.key} className="tabs-list-item">
              <button
                className={`tab-btn ${activeTab === tab.key ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Tab Panel */}
      <div className="tab-panel">
        {tabs.map((tab) =>
          activeTab === tab.key ? (
            <div key={tab.key}>
              <strong>{tab.label}</strong> content goes here.
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default TabsDemo;