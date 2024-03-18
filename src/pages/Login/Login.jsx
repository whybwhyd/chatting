import * as St from './style';
import React, { useState } from 'react';
import { firebaseAuth } from '../../firebase/firebaseAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const initialvalue = { email: '', password: '' };
  const [form, setForm] = useState(initialvalue);
  const { email, password } = form;
  const { loginEmailPassword } = firebaseAuth();

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const loginHandler = async () => {
    await loginEmailPassword(email, password);
    setForm(initialvalue);
  };

  return (
    <St.LoginFrame>
      <St.LoginFormFrame>
        <St.TextFrame>
          <St.TextTitle>Welcome to KakaoTalk</St.TextTitle>
          <St.Text>if you have a Kakao Account,</St.Text>
          <St.Text>log in with your email or phone number.</St.Text>
        </St.TextFrame>

        <St.LoginInputFrame>
          <St.LoginInput
            id="emailPhoneNumber"
            name="email"
            placeholder="Email or phone number"
            value={email}
            onChange={onChange}
          />
          <St.LoginInput
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
          />
        </St.LoginInputFrame>

        <St.LoginButtonFrame>
          <St.LoginButton onClick={loginHandler}>Login</St.LoginButton>
          <St.LoginButton>Sign Up</St.LoginButton>
          <ToastContainer
            position="top-center"
            autoClose={1800}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </St.LoginButtonFrame>
        <St.TextDescription>Find Kakao Account or Password</St.TextDescription>
      </St.LoginFormFrame>
    </St.LoginFrame>
  );
};

export default Login;
