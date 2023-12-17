// src/components/Biography.js
import React from 'react';

function Biography({ data }) {
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.birthDate} | {data.birthPlace}</p>
      <p>{data.bio}</p>

    </div>
  );
}

export default Biography;
