import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './layout/Header';
import Navbar from './layout/Navbar';
import Home from './pages/Home';

const title = "Prépare tes bowl cakes"
 document.title = title

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header >
      <Navbar brand={title} >
        <div>liens et boutons ici</div>
      </Navbar>

      <h1>{title}</h1>
    </Header>
    <Home  />
    <footer>
      fabagile {'&copy;'} 2023
    </footer> */}
    <App></App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
