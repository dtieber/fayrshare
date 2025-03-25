import { ExpenseGroup } from '../model/expense-group.ts'
import { Expense } from '../model/expense.ts'

export const expense1: Expense = {
  id: 1,
  title: 'Restaurant ABC',
  amount: 62.2,
  date: new Date(2025, 2, 3),
  paidBy: 'daniel@mail.com',
}

export const expense2: Expense = {
  id: 2,
  title: 'Gasoline',
  amount: 32.56,
  date: new Date(2025, 2, 4),
  paidBy: 'nadine@mail.com',
}

export const expense3: Expense = {
  id: 3,
  title: 'Entry park',
  amount: 75,
  date: new Date(2025, 2, 4),
  paidBy: 'daniel@mail.com',
}

export const expenses: Expense[] = [expense1, expense2, expense3]

export const expenseGroup1 = {
  id: 1,
  name: 'Vacation in Vancouver',
  members: ['daniel@mail.com', 'nadine@mail.com', 'thomas@mail.com'],
  expenses,
}

export const expenseGroup2 = {
  id: 2,
  name: 'Upcoming trip to Sicily',
  members: ['daniel@mail.com', 'nadine@mail.com'],
  expenses: [],
}

export const expenseGroups: ExpenseGroup[] = [expenseGroup1, expenseGroup2]
