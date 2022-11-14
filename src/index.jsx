import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Pages/Login'
import Home from './Pages/Home'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import {RepositoriesProvider, SelectRepositoryProvider, SelectUserProvider, UsersProvider } from './utils/hooks/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <UsersProvider>
        <SelectUserProvider>
        <RepositoriesProvider>
        <SelectRepositoryProvider>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path="/home" element={<Home/>} />
            <Route path="/user/:username" element={<Home/>} />
            <Route path='/profile/:ProfileName' element={<Home/>}/>
        </Routes>
        </SelectRepositoryProvider>
        </RepositoriesProvider>
        </SelectUserProvider>
        </UsersProvider>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
