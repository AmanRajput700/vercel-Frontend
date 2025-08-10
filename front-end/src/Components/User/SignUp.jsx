import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { LoginContext } from '../../contexts/loginContext';
import axios from 'axios';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const { isOpen, setisOpen } = useContext(LoginContext);

  function onSubmit(data) {
    axios
      .post('http://localhost:8080/register', data)
      .then((res) => {
        console.log(res.data);
        setisOpen(false);
      })
      .catch((err) => {
        console.log('error:' + err.message);
      });
  }

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="relative w-full max-w-md p-8 bg-white rounded-[32px] shadow-xl">
        {/* Close Button */}
        <button
          className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={() => setisOpen(false)}
        >
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-6">Create a new account</h2>

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
                  message: 'Minimum 3 characters',
                },
                maxLength: {
                  value: 10,
                  message: 'Maximum 10 characters',
                },
              })}
              id="username"
              placeholder="Enter username"
              className={`mt-1 w-full px-3 py-2 border ${
                errors.username ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              id="email"
              placeholder="Enter email"
              className={`mt-1 w-full px-3 py-2 border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
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
              id="password"
              placeholder="Enter password"
              className={`mt-1 w-full px-3 py-2 border ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Role */}
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              {...register('role', { required: 'Please select a role' })}
              id="role"
              defaultValue="user"
              className={`mt-1 w-full px-3 py-2 border ${
                errors.role ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400`}
            >
              <option value="user">User</option>
              <option value="admin">Restaurant Owner</option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`mt-2 w-full py-2 px-4 rounded-md text-white font-semibold ${
              isSubmitting
                ? 'bg-blue-300 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
