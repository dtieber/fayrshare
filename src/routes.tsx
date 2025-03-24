import { createBrowserRouter } from 'react-router-dom'

import { AddExpense } from './screens/add-expense.tsx'
import { EditExpense } from './screens/edit-expense.tsx'
import { ExpenseList, expenseListLoader } from './screens/expense-list.tsx'
import { Root } from './screens/root.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: expenseListLoader,
    id: 'expenses',
    children: [
      {
        index: true,
        element: <ExpenseList />,
      },
      {
        path: 'new',
        element: <AddExpense />,
      },
      {
        path: ':id',
        element: <EditExpense />,
      },
    ],
  },
])
