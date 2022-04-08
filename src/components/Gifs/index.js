import React from 'react';
import Gif from '../Gif';

function Gifs({ gifs }) {
  return (
    <div className="list-gif">
      {gifs.map((item, index) => (
        <div className="list-item" key={index}>
          <Gif url={item.images.fixed_width.url} title={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Gifs;
