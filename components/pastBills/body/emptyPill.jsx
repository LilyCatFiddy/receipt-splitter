import React from 'react';
import Pill from './pill.jsx';

export default function EmptyPill() {
  return (
    <Pill classes='pastBills__pill--empty'>
      <div className="icon__plus">
        <img src="/plus-icon.svg" />
      </div>
    </Pill>
  );
}