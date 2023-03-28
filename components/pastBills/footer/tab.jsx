import React, { useState, useEffect } from 'react';

export default function Tab({ children }) {
  return (
    <button className="pastBills__tab">
      <span className="pastBills__tab-content">
        {children}
      </span>
    </button>
  );
}