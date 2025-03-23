import styles from './edit-expense.module.css'

import { useNavigate, useParams, useRouteLoaderData } from 'react-router-dom'

import { ExpenseForm, ExpenseFormData } from '../components/expense-form.tsx'
import { expenses } from '../data/demo-expenses.ts'
import { Expense } from '../model/expense.ts'

export function EditExpense() {
  const navigate = useNavigate()

  const { id } = useParams() as { id: string }
  const expenseId = parseFloat(id)

  const data = useRouteLoaderData('expenses') as { expenses: Expense[] }
  const expense = data.expenses.find((e) => e.id == expenseId)

  if (!expense) {
    return <p>Error. Expense not found</p>
  }

  function handleSubmit(data: ExpenseFormData) {
    const pos = expenses.map((e) => e.id).indexOf(expenseId)
    expenses.splice(pos, 1)
    expenses.push({ ...data, id: expenseId })

    navigate('/')
  }

  return (
    <>
      <header>
        <h2 className={styles.title}>Edit Expense ({expense.id})</h2>
      </header>
      <main>
        <ExpenseForm expense={expense} onSubmit={handleSubmit} />
      </main>
    </>
  )
}
