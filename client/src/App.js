import React, { Component } from 'react';
import ChatsMain from './Components/ChatsMain';
import RegisterPage from './Components/RegisterPage';
import LoginPage from './Components/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/register' element={<RegisterPage />} ></Route>
            <Route path='/login' element={<LoginPage />} ></Route>
            <Route path='/' element={ <ChatsMain /> }></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
