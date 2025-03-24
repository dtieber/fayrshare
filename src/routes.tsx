import { createBrowserRouter } from 'react-router-dom'

import { expenseGroupLoader } from './loader/expense-group-loader.ts'
import { expenseGroupOverviewLoader } from './loader/expense-group-overview-loader.ts'
import { AddExpense } from './screens/add-expense.tsx'
import { EditExpense } from './screens/edit-expense.tsx'
import { ExpenseGroupOverview } from './screens/expense-group-overview.tsx'
import { ExpenseList } from './screens/expense-list.tsx'
import { Root } from './screens/root.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: expenseGroupOverviewLoader,
    id: 'expense-groups',
    children: [
      {
        index: true,
        element: <ExpenseGroupOverview />,
      },
    ],
  },
  {
    path: '/:groupId',
    element: <Root />,
    loader: expenseGroupLoader,
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
