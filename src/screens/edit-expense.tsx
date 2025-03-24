import { useNavigate, useParams, useRouteLoaderData } from 'react-router-dom'

import { ExpenseForm, ExpenseFormData } from '../components/expense-form.tsx'
import { PageContent } from '../components/page-content.tsx'
import { PageHeader } from '../components/page-header.tsx'
import { ExpenseGroup } from '../model/expense-group.ts'

export function EditExpense() {
  const navigate = useNavigate()

  const { id } = useParams() as { id: string }
  const expenseId = parseFloat(id)

  const expenseGroup = useRouteLoaderData('expenses') as ExpenseGroup
  const expense = expenseGroup.expenses.find((e) => e.id == expenseId)

  if (!expense) {
    return <p>Error. Expense not found</p>
  }

  function handleSubmit(data: ExpenseFormData) {
    const pos = expenseGroup.expenses.map((e) => e.id).indexOf(expenseId)
    expenseGroup.expenses.splice(pos, 1)
    expenseGroup.expenses.push({ ...data, id: expenseId })

    navigate(`/${expenseGroup.id}`)
  }

  return (
    <>
      <PageHeader title={`Edit Expense (${expense.id})`} />
      <PageContent>
        <ExpenseForm expense={expense} onSubmit={handleSubmit} />
      </PageContent>
    </>
  )
}
