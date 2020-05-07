import React from 'react';
import './rank.css';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div class="align">
        {`Hello!! ${name}, your current entry count is...`}
      </div>
      <div className='white f1'>
        {entries}
      </div>
    </div>
  );
}

export default Rank;