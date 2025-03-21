import { Expense } from '../model/expense.ts'

export const expense1: Expense = {
  id: 1,
  title: 'Restaurant ABC',
  amount: 62.2,
  date: new Date(2025, 2, 3),
}

export const expense2: Expense = {
  id: 2,
  title: 'Gasoline',
  amount: 32.56,
  date: new Date(2025, 2, 4),
}

export const expense3: Expense = {
  id: 3,
  title: 'Entry park',
  amount: 75,
  date: new Date(2025, 2, 4),
}

export const expenses: Expense[] = [expense1, expense2, expense3]
