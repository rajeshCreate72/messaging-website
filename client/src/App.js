import React, { useEffect } from 'react';
import ChatsMain from './Components/ChatsMain';
import RegisterPage from './Components/RegisterPage';
import LoginPage from './Components/LoginPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from './Components/service/actions/userLogActions';

function App ({ isIntiatialLog }) {
  const { isLogged } = useSelector((state) => state.loginAuth)
  const dispatch = useDispatch()

  // console.log(isIntiatialLog);
  // console.log(isLogged)

  useEffect(() => {
    if(isIntiatialLog) {
      dispatch(loginSuccess())
    }
  }, [dispatch, isIntiatialLog])

    return (
      <div>
          <Routes>
            <Route path='/register' element={<RegisterPage />} ></Route>
            <Route path='/login' element = {isLogged ? <Navigate to='/' /> : <LoginPage/>}></Route>
            <Route path='/' element = {isLogged ? <ChatsMain /> : <Navigate to='/login' />}></Route>
          </Routes>
      </div>
    );
  }

export default App;
