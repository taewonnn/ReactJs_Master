import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import {ThemeProvider} from "styled-components";
import App from "./App";


const darkTheme = {
  textColor: 'whitesmoke',
  backgroundColor: 'black',
}

const lightTheme = {
  textColor: 'black',
  backgroundColor: 'whitesmoke'
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
);
