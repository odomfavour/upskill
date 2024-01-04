'use client';

import { useState, useEffect } from 'react';
import { navLinks } from '@/utils/data';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
const Header = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const getUserDetails = async () => {
    const res = await axios.get('/api/users/me');
    console.log(res.data);
    if (res.data.data._id) {
      setUser(res.data.data._id);
      setIsLoggedIn(true);
    }
  };
  const logout = async () => {
    try {
      await axios.get('/api/users/logout');
      alert('Logout Successful');
      router.push('/auth/login');
    } catch (error: any) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getUserDetails();
    // Check for the token in cookies or wherever it's stored
    console.log(sessionStorage.getItem('token'));
    const cookies = document.cookie.split('; ');
    console.log(cookies);
    // const token = /* Logic to get the token from cookies */;

    // // Update isLoggedIn state based on the presence of the token
    // setIsLoggedIn(!!token);
  }, []);

  return (
    <div className='w-full  top-0 z-40 left-0 fixed bg-white flex justify-center shadow-lg shadow-[rgba(0,0,0,0.025)]'>
      <div className='w-11/12 mx-auto'>
        <div className='flex justify-between items-center py-5 '>
          Upskill
          <ul className='md:flex items-center gap-12 hidden'>
            {navLinks.map((itemLink) => (
              <li key={itemLink.id}>
                <Link
                  href={itemLink.url}
                  className={`text-base font-normal pb-2
                  }`}
                >
                  {itemLink.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className='md:flex gap-4 hidden'>
            {/* Conditionally render Logout button based on isLoggedIn */}
            {isLoggedIn ? (
              <button
                className='bg-[#F37B23] rounded px-7 py-[6px] font-semibold text-base text-white'
                onClick={logout}
              >
                Logout
              </button>
            ) : (
              <>
                <button className='bg-[#F37B23] rounded px-7 py-[6px] font-semibold text-base text-white'>
                  Login
                </button>
                <button className='border border-[#F37B23]  rounded px-7 py-[6px] text-[#F37B2] font-semibold text-base'>
                  Sign Up
                </button>
              </>
            )}
          </div>
          <div className='hamburger cursor-pointer md:hidden block'>
            {/* <FaHamburger
                role="button"
                className="text-[#F37B23] text-3xl"
              
              /> */}
          </div>
        </div>
      </div>
      {/* {showSignup && <RegisterModal handleClose={closeSignup} />}
      {showSignin && <LoginModal handleClose={closeSignIn} />}
      <SidebarSmall open={openMobile} onClose={() => setOpenMobile(false)} /> */}
    </div>
  );
};

export default Header;
