import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { LoginContext } from '../../contexts/loginContext';
import { AuthContext } from '../../contexts/authContext';
import axios from 'axios';

const LoginForm = () => {
  const { setIsLoggedIn, setUser } = useContext(AuthContext);
  const { isOpen, setisOpen } = useContext(LoginContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(data) {
    axios
      .post('http://localhost:8080/login', data, { withCredentials: true })
      .then((res) => {
        setIsLoggedIn(true);
        setUser(res.data.user);
        setisOpen(false);
      })
      .catch((err) => {
        alert('Invalid credentials');
        console.error('Login Error:', err.message);
      });
  }

  return (
    <div className="h-screen w-full flex rounded-[32px] items-center justify-center bg-gray-100">
      <div className="relative bg-white rounded-[32px] shadow-xl w-full max-w-md p-8">
        {/* Close Button */}
        <button
          className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={() => setisOpen(false)}
        >
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-6">Login to your account</h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              {...register('username', {
                required: 'Username is required',
                minLength: {
                  value: 3,
                  message: 'Minimum length is 3 characters',
                },
                maxLength: {
                  value: 10,
                  message: 'Maximum length is 10 characters',
                },
              })}
              id="username"
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.username ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400`}
              placeholder="Enter your username"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                  message:
                    'Must include uppercase, lowercase, number, and special character',
                },
              })}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`mt-2 w-full py-2 px-4 rounded-md text-white font-semibold ${
              isSubmitting
                ? 'bg-blue-300 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
