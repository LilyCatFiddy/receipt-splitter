import React, { useState, useEffect } from 'react';
import Bill from './bill.jsx';
import EmptyPill from './emptyPill.jsx';
import InfoPill from './infoPill.jsx';

export default function BillList({ bills }) {
  return (
    <div>
      <h1 className="pastBills__title">
        Past Bills
      </h1>
      <ul className="pastBills__list">
        <InfoPill />
        <Bill title={"Grocery Bill"}/>
        <EmptyPill />
      </ul>
    </div>
  );
}