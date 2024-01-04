'use client';
import React, { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <main className='flex items-center w-full h-screen'>
      <div className='bg-cover bg-auth-pattern bg-bottom w-3/5 h-screen '>
        fdgfjdgf
      </div>
      <div className='w-2/5 h-screen flex-none'>{children}</div>
    </main>
  );
};

export default AuthLayout;
