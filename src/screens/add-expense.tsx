import { useNavigate } from 'react-router-dom'

import { ExpenseForm, ExpenseFormData } from '../components/expense-form.tsx'
import { PageContent } from '../components/page-content.tsx'
import { PageHeader } from '../components/page-header.tsx'
import { expenses } from '../data/demo-data.ts'

export function AddExpense() {
  const navigate = useNavigate()

  function handleSubmit(data: ExpenseFormData) {
    expenses.push({ ...data, id: expenses.length + 1 })
    navigate('/')
  }

  return (
    <>
      <PageHeader title="Add Expense" />
      <PageContent>
        <ExpenseForm onSubmit={handleSubmit} />
      </PageContent>
    </>
  )
}
