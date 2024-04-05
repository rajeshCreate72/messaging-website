import React, { Component } from 'react';
import ChatsMain from './Components/ChatsMain';
// import RegistrationPage from './Components/RegistrationPage/RegistrationPage';
// import LoginPage from './Components/LoginPage/LoginPage'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        {/* <BrowserRouter>
          <Routes>
            <Route path='/register' element={<RegistrationPage />} ></Route>
            <Route path='/login' element={<LoginPage />} ></Route>
            <Route path='/' element={ <ChatsMain /> }></Route>
          </Routes>
        </BrowserRouter> */}
        <ChatsMain />
      </div>
    );
  }
}

export default App;
