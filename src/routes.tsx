import { createBrowserRouter } from 'react-router-dom'

import { AddExpense } from './screens/add-expense.tsx'
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
      {
        path: 'new',
        element: <AddExpense />,
      },
    ],
  },
])
