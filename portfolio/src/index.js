import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Intro from './components/Intro';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Intro />
    <Home />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
