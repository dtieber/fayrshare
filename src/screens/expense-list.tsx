import { useLoaderData } from 'react-router-dom'

import { expenses } from '../data/demo-expenses.ts'
import { Expense } from '../model/expense.ts'

export function ExpenseList() {
  const data = useLoaderData() as { expenses: Expense[] }
  return (
    <>
      <p>{JSON.stringify(data)}</p>
    </>
  )
}

export const expenseListLoader = () => ({ expenses })
