// Imports React
import React from 'react';

// Imports Level Apps
import Levels from './levels';

// TODO: allow `level` to be dynamic
// Maybe send arguments from Gulp/Browserify?
let level = 0;

// Top-level `<App />`
let App = Levels[level];

// Render top-level component
React.render(
  <App />,
  document.getElementById('comments-app')
);
