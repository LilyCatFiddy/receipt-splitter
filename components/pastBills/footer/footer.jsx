import React from 'react';
import Tab from './tab.jsx';

export default function Footer() {
  return (
    <div className="pastBills__tabList">
      <Tab>Split Tab</Tab>
      <Tab>IOU</Tab>
      <Tab>
        <div className="icon__anonymous-person">
          <img src="/anonymous-person-icon.svg" alt="Settings icon" />
        </div>
      </Tab>
    </div>
  );
}