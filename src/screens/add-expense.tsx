import { useNavigate, useRouteLoaderData } from 'react-router-dom'

import { ExpenseForm, ExpenseFormData } from '../components/expense-form.tsx'
import { PageContent } from '../components/page-content.tsx'
import { PageHeader } from '../components/page-header.tsx'
import { expenses } from '../data/demo-data.ts'
import { ExpenseGroup } from '../model/expense-group.ts'

export function AddExpense() {
  const navigate = useNavigate()

  const expenseGroup = useRouteLoaderData('expenses') as ExpenseGroup

  function handleSubmit(data: ExpenseFormData) {
    expenseGroup.expenses.push({ ...data, id: expenses.length + 1 })
    navigate(`/${expenseGroup.id}`)
  }

  return (
    <>
      <PageHeader title="Add Expense" />
      <PageContent>
        <ExpenseForm members={expenseGroup.members} onSubmit={handleSubmit} />
      </PageContent>
    </>
  )
}
