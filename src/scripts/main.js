/* eslint-disable max-len */
'use strict';

// menu button svg animation
document.addEventListener('DOMContentLoaded', () => {
  const path = document.querySelector('.animated-path');

  const originalD
    = 'M3 17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17C21 16.4477 20.5523 16 20 16H4C3.44772 16 3 16.4477 3 17ZM3 12C3 12.5523 3.44772 13 4 13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11H4C3.44772 11 3 11.4477 3 12ZM4 6C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H4Z';
  const hoverD
    = 'M3 17C3 17.5523 3.44772 18 4 18H11C11.5523 18 12 17.5523 12 17C12 16.4477 11.5523 16 11 16H4C3.44772 16 3 16.4477 3 17ZM3 12C3 12.5523 3.44772 13 4 13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11H4C3.44772 11 3 11.4477 3 12ZM4 6C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H15C15.5523 8 16 7.55228 16 7C16 6.44772 15.5523 6 15 6H4Z';

  document.querySelector('.icon--menu').addEventListener('mouseover', () => {
    path.setAttribute('d', hoverD);
  });

  document.querySelector('.icon--menu').addEventListener('mouseout', () => {
    path.setAttribute('d', originalD);
  });
});
