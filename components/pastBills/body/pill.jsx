import React from 'react';

export default function Pill({ classes = '', children }) {
  return (
    <div className={'pastBills__pill ' + classes}>
      <div className="pastBills__pill-text">
        {children}
      </div>
    </div>
  );
}