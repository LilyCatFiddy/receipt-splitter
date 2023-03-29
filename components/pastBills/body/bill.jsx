import React from 'react';
import Pill from './pill.jsx';

export default function Bill({ title }) {
  return (
    <Pill classes='pastBills__pill--filled'>
      {title}
    </Pill>
  );
}