import { Expense } from './expense.ts'

export type ExpenseGroup = {
  id: number
  name: string
  members: string[]
  expenses: Expense[]
}
