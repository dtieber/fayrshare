import './App.css'

import { RouterProvider } from 'react-router-dom'

import { router } from './routes.tsx'

export function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
}
