
//import $ from 'jquery'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


const ThemeWrapper = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
  <ThemeWrapper />,
  document.getElementById('root')
);
//$.material.init()
