import { useNavigate } from 'react-router-dom'

import { ExpenseForm, ExpenseFormData } from '../components/expense-form.tsx'
import { PageHeader } from '../components/page-header.tsx'
import { expenses } from '../data/demo-expenses.ts'

export function AddExpense() {
  const navigate = useNavigate()

  function handleSubmit(data: ExpenseFormData) {
    expenses.push({ ...data, id: expenses.length + 1 })
    navigate('/')
  }

  return (
    <>
      <PageHeader title="Add Expense" />
      <main>
        <ExpenseForm onSubmit={handleSubmit} />
      </main>
    </>
  )
}
