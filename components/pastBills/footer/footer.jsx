import React, { useState, useEffect } from 'react';
import Tab from './tab.jsx';

export default function Footer() {
  return (
    <div className="pastBills__tabList">
      <Tab>IOU</Tab>
      <Tab>IOU</Tab>
    </div>
  );
}