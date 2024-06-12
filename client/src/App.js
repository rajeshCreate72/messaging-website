import React, { Component } from 'react';
import ChatsMain from './Components/ChatsMain';
import RegisterPage from './Components/RegisterPage';
import LoginPage from './Components/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Components/Store';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path='/register' element={<RegisterPage />} ></Route>
              <Route path='/login' element={<LoginPage />} ></Route>
              <Route path='/' element={ <ChatsMain /> }></Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
