import '@/app/globals.css';
import { router } from '@/app/router';
import { RouterProvider } from '@tanstack/react-router';
import React from 'react';

export function App(): React.JSX.Element {
  return <RouterProvider router={router} />;
}
