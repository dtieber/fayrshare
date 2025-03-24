import { Params } from 'react-router-dom'

import { expenseGroups } from '../data/demo-data.ts'

export const expenseGroupLoader = ({ params }: { params: Params<'groupId'> }) => {
  const parsedExpenseGroupId = parseFloat(params.groupId ?? '')
  const expenseGroup = expenseGroups.find((expense) => expense.id === parsedExpenseGroupId)
  if (!expenseGroup) {
    throw new Error('Expense group not found')
  }
  return expenseGroup
}
