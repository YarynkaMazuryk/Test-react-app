import React, { PureComponent } from 'react';
import './loader.css';

class Loader extends PureComponent {
  render() {
    return (
      <div className='loaderContainer'>
        <div className="loader"></div>
      </div>
      )
  }
}

export default Loader;