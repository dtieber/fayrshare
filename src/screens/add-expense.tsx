import styles from './add-expense.module.css'

import { useNavigate } from 'react-router-dom'

import { ExpenseForm, ExpenseFormData } from '../components/expense-form.tsx'
import { expenses } from '../data/demo-expenses.ts'

export function AddExpense() {
  const navigate = useNavigate()

  function handleSubmit(data: ExpenseFormData) {
    expenses.push({ ...data, id: expenses.length + 1 })
    navigate('/')
  }

  return (
    <>
      <header>
        <h2 className={styles.title}>Add Expense</h2>
      </header>
      <main>
        <ExpenseForm onSubmit={handleSubmit} />
      </main>
    </>
  )
}
