'use client';

import { useWixClient } from '@/hooks/useWixClient';
import { useState } from 'react';

enum MODE {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  REST_PASSWORD = 'REST_PASSWORD',
  EMAIL_VERIFICATION = 'EMAIL_VERIFICATION',
}

const LoginPage = () => {
  const [mode, setMode] = useState(MODE.LOGIN);
  const [email, setEmail] = useState('');
  const [password, setUserName] = useState('');
  const [emailCode, setEmailCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const formTitle =
    mode === MODE.LOGIN
      ? 'Login'
      : mode === MODE.REGISTER
      ? 'Register'
      : mode === MODE.REST_PASSWORD
      ? 'Rest Your Password'
      : 'Verify Your Eamil';

  const buttonTitle =
    mode === MODE.LOGIN
      ? 'Login'
      : mode === MODE.REGISTER
      ? 'Register'
      : mode === MODE.REST_PASSWORD
      ? 'Rest'
      : 'Verify';
  const wixClient = useWixClient();

  return (
    <div className="h-[calc(100vh-80px)] flex items-center justify-center px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
      <form className="flex flex-col gap-8">
        <h1 className="text-2xl font-semibold">{formTitle}</h1>

        {mode === MODE.REGISTER ? (
          <div className="flex flex-col gap-2">
            <label htmlFor="userName" className="text-sm text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="userName"
              placeholder="name"
              className="ring-2 ring-gray-300 rounded-md p-4"
            />
          </div>
        ) : null}

        {mode !== MODE.EMAIL_VERIFICATION ? (
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              placeholder="abc123@abc.com"
              className="ring-2 ring-gray-300 rounded-md p-4"
            />
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <label htmlFor="emailCode" className="text-sm text-gray-700">
              Verification Code
            </label>
            <input
              type="text"
              name="emailCode"
              placeholder="Code"
              className="ring-2 ring-gray-300 rounded-md p-4"
            />
          </div>
        )}

        {mode === MODE.LOGIN || mode === MODE.REGISTER ? (
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm text-gray-700">
              Verification Code
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="ring-2 ring-gray-300 rounded-md p-4"
            />
          </div>
        ) : null}
        {mode === MODE.LOGIN && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.REST_PASSWORD)}
          >
            Forgot Password?
          </div>
        )}

        <button
          className="bg-lama text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? 'Loading' : buttonTitle}
        </button>

        {error && <div className="text-red-600">{error}</div>}

        {mode === MODE.LOGIN && (
          <div className="text-sm underline cursor-pointer" onClick={() => setMode(MODE.REGISTER)}>
            {"Don't"} have an account?
          </div>
        )}
        {mode === MODE.REGISTER && (
          <div className="text-sm underline cursor-pointer" onClick={() => setMode(MODE.LOGIN)}>
            Have and account?
          </div>
        )}
        {mode === MODE.REST_PASSWORD && (
          <div className="text-sm underline cursor-pointer" onClick={() => setMode(MODE.LOGIN)}>
            Go back to Login
          </div>
        )}
        {message && <div className="text-green-600 text-sm">{message}</div>}
      </form>
    </div>
  );
};

export default LoginPage;
