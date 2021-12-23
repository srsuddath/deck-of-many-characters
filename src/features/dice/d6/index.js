import React from 'react';
import "./style.scss";

const D6Display = (props) => {
  return (
    <button className='button-wrapper' onClick={props.onClick} >
      <p className='d6-button-text'>{Math.abs(props.dieValue)}</p>
      <svg className='d6-svg' xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0, 0, 110, 115">
        <g id="Layer_1">
          <path className={props.dieValue < 0 ? 'unused-roll' : 'used-roll'}  d="M100.44,96.79 C100.207,100.103 97.582,102.745 94.27,103 C86.7,103.59 72.27,104.5 55,104.5 C37.73,104.5 23.31,103.59 15.74,103 C12.425,102.741 9.797,100.097 9.56,96.78 C9,88.5 8,72.52 8,57.5 C8,42.48 9,26.5 9.56,18.23 C9.793,14.909 12.421,12.259 15.74,12 C23.45,11.42 38.12,10.5 55,10.5 C71.88,10.5 86.57,11.42 94.27,12.01 C97.585,12.269 100.213,14.913 100.45,18.23 C101,26.41 102,42.15 102,57.5 C102,72.85 101,88.61 100.44,96.79 z"/>
          <path d="M90.8,93.88 C84.33,100.9 55,104.5 55,104.5 C55,104.5 71.56,104.27 78.27,103.97 C84.98,103.67 90.49,103.3 94.27,102.97 C97.582,102.715 100.207,100.073 100.44,96.76 C100.74,92.67 101.13,86.69 101.44,79.76 C101.75,72.83 102,57.5 102,57.5 C102,57.5 97.28,86.87 90.8,93.88 z" fill="#000000" opacity="0.2"/>
          <path d="M19.2,21.12 C25.67,14.1 55,10.5 55,10.5 C55,10.5 38.44,10.73 31.73,11.03 C25.02,11.33 19.52,11.7 15.73,12.03 C12.418,12.285 9.793,14.927 9.56,18.24 C9.26,22.33 8.87,28.31 8.56,35.19 C8.25,42.07 8,57.5 8,57.5 C8,57.5 12.72,28.13 19.2,21.12 z" fill="#000000" opacity="0.1"/>
          <path d="M18.62,93.3 C11.6,86.83 8,57.5 8,57.5 C8,57.5 8.23,74.06 8.53,80.77 C8.83,87.48 9.21,92.98 9.53,96.77 C9.785,100.082 12.427,102.707 15.74,102.94 C19.83,103.24 25.82,103.63 32.74,103.94 C39.66,104.25 55,104.5 55,104.5 C55,104.5 25.64,99.78 18.62,93.3 z" fill="#000000" opacity="0.2"/>
          <path d="M91.38,21.7 C98.4,28.17 102,57.5 102,57.5 C102,57.5 101.77,40.94 101.47,34.23 C101.17,27.52 100.8,22.02 100.47,18.23 C100.215,14.918 97.573,12.293 94.26,12.06 C90.17,11.76 84.19,11.37 77.26,11.06 C70.33,10.75 55,10.5 55,10.5 C55,10.5 84.37,15.22 91.38,21.7 z" fill="#000000" opacity="0.1"/>
        </g>
      </svg>
    </button>
  );
}

export default D6Display;