import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain4.png';
import './Logo.css';

const Logo = () => {
  return (
    <div class="align">
      <Tilt className="Tilt br2 shadow-2" options={{ max : 60 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3">
          <img style={{marginTop: '-11px'}} alt='logo' src={brain}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;