'use client';

// import AuthLayout from '@/components/AuthLayout/page';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';
const SignUp = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    state: '',
    track: '',
    education: '',
  });
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (
      user.firstName &&
      user.lastName &&
      user.email &&
      user.password &&
      user.confirmPassword &&
      user.country &&
      user.state &&
      user.track &&
      user.education
    ) {
      setBtnDisabled(false);
    }
  }, [user]);

  const onSignup = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post('/api/users/signup', user); // Add 'await' here
      const data = response.data; // Access the response data
      console.log('Signup Success', data);
      // Perform actions after successful signup
      console.log(response);
    } catch (error: any) {
      toast.error('Signup failed', error.response.data.message);
      if (error.response) {
        alert(error.response.data.error);
      }
    } finally {
      setLoading(false);
    }
    console.log(user);
  };

  return (
    <div className='flex justify-center items-center min-h-screen py-10'>
      <div className='w-1/2'>
        <h3 className='mb-4 text-5xl font-bold '>Create Account</h3>
        <form onSubmit={onSignup}>
          <div className='mb-6'>
            <label
              htmlFor='firstName'
              className='block mb-2 text-sm font-medium text-gray-90'
            >
              First Name
            </label>
            <input
              type='text'
              id='firstName'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              placeholder='name@flowbite.com'
              required
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='lastName'
              className='block mb-2 text-sm font-medium text-gray-90'
            >
              Last Name
            </label>
            <input
              type='text'
              id='lastName'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              placeholder='name@flowbite.com'
              required
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-90'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              placeholder='name@flowbite.com'
              required
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium text-gray-90'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              placeholder='name@flowbite.com'
              required
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='confirmPassword'
              className='block mb-2 text-sm font-medium text-gray-90'
            >
              confirm Password
            </label>
            <input
              type='text'
              id='confirmPassword'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              placeholder='name@flowbite.com'
              required
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='track'
              className='block mb-2 text-sm font-medium text-gray-90'
            >
              Select your Track
            </label>
            <select
              id='track'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              value={user.track}
              onChange={(e) => setUser({ ...user, track: e.target.value })}
            >
              <option value=''>Choose a Track</option>
              <option value='US'>Frontend</option>
              <option value='CA'>Product Design</option>
              <option value='FR'>Backend</option>
              <option value='DE'>Test</option>
            </select>
          </div>
          <div className='mb-6'>
            <label
              htmlFor='country'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Select your Country
            </label>
            <select
              id='countries'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              value={user.country}
              onChange={(e) => setUser({ ...user, country: e.target.value })}
            >
              <option value=''>Choose a Country</option>
              <option value='US'>Frontend</option>
              <option value='CA'>Product Design</option>
              <option value='FR'>Backend</option>
              <option value='DE'>Test</option>
            </select>
          </div>
          <div className='mb-6'>
            <label
              htmlFor='state'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Select your State
            </label>
            <select
              id='state'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              value={user.state}
              onChange={(e) => setUser({ ...user, state: e.target.value })}
            >
              <option value=''>Choose a State</option>
              <option value='US'>Frontend</option>
              <option value='CA'>Product Design</option>
              <option value='FR'>Backend</option>
              <option value='DE'>Test</option>
            </select>
          </div>
          <div className='mb-6'>
            <label
              htmlFor='education'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Highest level of Education
            </label>
            <select
              id='education'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              value={user.education}
              onChange={(e) => setUser({ ...user, education: e.target.value })}
            >
              <option value=''>Choose a Country</option>
              <option value='US'>Frontend</option>
              <option value='CA'>Product Design</option>
              <option value='FR'>Backend</option>
              <option value='DE'>Test</option>
            </select>
          </div>
          {/* <div className='mb-6'>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Your password
            </label>
            <input
              type='password'
              id='password'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Your password
            </label>
            <input
              type='password'
              id='password'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              required
            />
          </div>
          <div className='flex items-start mb-6'>
            <div className='flex items-center h-5'>
              <input
                id='remember'
                type='checkbox'
                value=''
                className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300'
                required
              />
            </div>
            <label
              htmlFor='remember'
              className='ml-2 text-sm font-medium text-gray-900'
            >
              Remember me
            </label>
          </div> */}
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center flex justify-center'
            disabled={btnDisabled}
          >
            <div className='flex items-center'>
              {loading && (
                <svg
                  aria-hidden='true'
                  className='w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white'
                  viewBox='0 0 100 101'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                    fill='currentColor'
                  />
                  <path
                    d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                    fill='currentFill'
                  />
                </svg>
              )}
              Submit
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
