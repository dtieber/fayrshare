import { useNavigate, useParams, useRouteLoaderData } from 'react-router-dom'

import { ExpenseForm, ExpenseFormData } from '../components/expense-form.tsx'
import { PageContent } from '../components/page-content.tsx'
import { PageHeader } from '../components/page-header.tsx'
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
      <PageHeader title={`Edit Expense (${expense.id})`} />
      <PageContent>
        <ExpenseForm expense={expense} onSubmit={handleSubmit} />
      </PageContent>
    </>
  )
}
