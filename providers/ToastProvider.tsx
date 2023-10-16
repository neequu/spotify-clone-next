'use client';

import { Toaster } from 'react-hot-toast';

import React from 'react';

const ToastProvider = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          background: '#333',
          color: '#fff',
        },
      }}
    />
  );
};

export default ToastProvider;
