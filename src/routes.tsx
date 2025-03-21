import { createBrowserRouter } from 'react-router-dom'

import { ExpenseList, expenseListLoader } from './screens/expense-list.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ExpenseList />,
    loader: expenseListLoader,
  },
])
