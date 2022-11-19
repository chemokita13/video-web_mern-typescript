import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import VideoList from './components/videos/VideoList';
import VideoForm from './components/videos/VideoForm';

import 'react-toastify/dist/ReactToastify.css';
import 'bootswatch/dist/morph/bootstrap.min.css';
import './index.css';
import NavBar from './components/navBar/NavBar';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <div className="container p-5">
        <Routes>
          <Route path="/" element={<VideoList />} />
          <Route path="/new-video" element={<VideoForm />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
