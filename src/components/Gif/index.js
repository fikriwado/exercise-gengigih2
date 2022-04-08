import React from 'react';

function Gif({ title, url }) {
  return <img src={url} alt={title} />;
}

export default Gif;
