import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//redux
import { Provider } from 'react-redux';
import store from "./redux/store"
//page
import Wrapper from './page/Wrapper/Wrapper';
import Home from './page/home/Home';
import Posts from './page/login/Posts';
import NotFound from './page/login/404';
import Login from './page/login/Login'; 
import Protected from './page/components/Protected'
import Register from './page/login/Register';
import HeaderNav from './page/components/HeaderNav';


function App() {
  // Get token from local storage
  const tokenLocalStorage = localStorage.getItem("token");
  // So we will pas token from local storage to this state
  // This is global state
  // For futher, we will use redux for global state (state management)
  const [token, setToken] = useState(tokenLocalStorage);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <HeaderNav setToken={setToken} token={token} />
        <Routes>
        <Route path='/' element={<Wrapper/>}>
          <Route index element={<Home/>}/>
        </Route>
            <Route
              path="/posts"
              element={
                <Protected token={token} setToken={setToken}>
                  <Posts />
                </Protected>
              }
            />
            <Route
              path="/login"
              element={<Login token={token} setToken={setToken} />}
            />
            <Route
              path="/register"
              element={<Register token={token} setToken={setToken} />}
            />

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
