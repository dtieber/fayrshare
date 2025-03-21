import { createBrowserRouter } from 'react-router-dom'

import { ExpenseList, expenseListLoader } from './screens/expense-list.tsx'
import { ExpenseRoot } from './screens/expense-root.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ExpenseRoot />,
    children: [
      {
        index: true,
        element: <ExpenseList />,
        loader: expenseListLoader,
      },
    ],
  },
])
