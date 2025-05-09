import { fireEvent, render, screen } from '@testing-library/react'
import { format } from 'date-fns'
import { describe, expect, it, vi } from 'vitest'

import { Expense } from '../../model/expense.ts'
import { ExpenseForm } from '../expense-form.tsx'

describe('<ExpenseForm>', () => {
  it('should render form with inputs for: title, amount, date and paidBy', () => {
    const members = [] as string[]
    const onSubmit = vi.fn()

    render(<ExpenseForm members={members} expense={undefined} onSubmit={onSubmit} />)

    expect(screen.getByLabelText('title-input')).toBeTruthy()
    expect(screen.getByLabelText('amount-input')).toBeTruthy()
    expect(screen.getByLabelText('date-input')).toBeTruthy()
    expect(screen.getByLabelText('paidBy-input')).toBeTruthy()
  })

  it('should display given expense title', async () => {
    const members = ['user1', 'user2'] as string[]
    const expense: Expense = {
      id: 1,
      title: 'my expense',
      amount: 33,
      date: new Date(2025, 1, 1),
      paidBy: members[0],
    }
    const onSubmit = vi.fn()

    render(<ExpenseForm members={members} expense={expense} onSubmit={onSubmit} />)

    const titleInput = screen.getByLabelText('title-input') as HTMLInputElement
    expect(titleInput.value).toEqual(expense.title)
  })

  it('should display given expense amount with two digits precision', async () => {
    const members = ['user1', 'user2'] as string[]
    const expense: Expense = {
      id: 1,
      title: 'my expense',
      amount: 33,
      date: new Date(2025, 1, 1),
      paidBy: members[0],
    }
    const onSubmit = vi.fn()

    render(<ExpenseForm members={members} expense={expense} onSubmit={onSubmit} />)

    const amountInput = screen.getByLabelText('amount-input') as HTMLInputElement
    expect(amountInput.value).toEqual(expense.amount.toFixed(2))
  })

  it('should display given expense date formatted as yyyy-MM-dd', async () => {
    const members = ['user1', 'user2'] as string[]
    const expense: Expense = {
      id: 1,
      title: 'my expense',
      amount: 33,
      date: new Date(2025, 1, 1),
      paidBy: members[0],
    }
    const onSubmit = vi.fn()

    render(<ExpenseForm members={members} expense={expense} onSubmit={onSubmit} />)

    const dateInput = screen.getByLabelText('date-input') as HTMLInputElement
    expect(dateInput.value).toEqual(format(expense.date, 'yyyy-MM-dd'))
  })

  it('should pre-select paidBy member', async () => {
    const members = ['user1', 'user2'] as string[]
    const expense: Expense = {
      id: 1,
      title: 'my expense',
      amount: 33,
      date: new Date(2025, 1, 1),
      paidBy: members[0],
    }
    const onSubmit = vi.fn()

    render(<ExpenseForm members={members} expense={expense} onSubmit={onSubmit} />)

    const paidByOption = screen.getByRole('option', { name: 'user1' }) as HTMLOptionElement
    expect(paidByOption.selected).toEqual(true)
  })

  it('should validate the title and enforce >0 characters', async () => {
    const members = ['user1', 'user2'] as string[]
    const expense: Expense = {
      id: 1,
      title: 'my expense',
      amount: 33,
      date: new Date(2025, 1, 1),
      paidBy: members[0],
    }
    const onSubmit = vi.fn()

    render(<ExpenseForm members={members} expense={expense} onSubmit={onSubmit} />)
    const titleInput = screen.getByLabelText('title-input')
    fireEvent.input(titleInput, { target: { value: '' } })
    const submitButton = screen.getByRole('button')
    fireEvent.click(submitButton)

    const titleLabel = screen.getByText('Title')
    expect(titleLabel.className).toContain('invalid')
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('should validate the amount and enforce the value is numeric', async () => {
    const members = ['user1', 'user2'] as string[]
    const expense: Expense = {
      id: 1,
      title: 'my expense',
      amount: 33,
      date: new Date(2025, 1, 1),
      paidBy: members[0],
    }
    const onSubmit = vi.fn()

    render(<ExpenseForm members={members} expense={expense} onSubmit={onSubmit} />)
    const amountInput = screen.getByLabelText('amount-input')
    fireEvent.input(amountInput, { target: { value: 'NOT A NUMBER' } })
    const submitButton = screen.getByRole('button')
    fireEvent.click(submitButton)

    const amountLabel = screen.getByText('Amount')
    expect(amountLabel.className).toContain('invalid')
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('should validate the amount and enforce the value is >0', async () => {
    const members = ['user1', 'user2'] as string[]
    const expense: Expense = {
      id: 1,
      title: 'my expense',
      amount: 33,
      date: new Date(2025, 1, 1),
      paidBy: members[0],
    }
    const onSubmit = vi.fn()

    render(<ExpenseForm members={members} expense={expense} onSubmit={onSubmit} />)
    const amountInput = screen.getByLabelText('amount-input')
    fireEvent.input(amountInput, { target: { value: '-4' } })
    const submitButton = screen.getByRole('button')
    fireEvent.click(submitButton)

    const amountLabel = screen.getByText('Amount')
    expect(amountLabel.className).toContain('invalid')
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('should trigger event if all inputs are valid', async () => {
    const members = ['user1', 'user2'] as string[]
    const expense: Expense = {
      id: 1,
      title: 'my expense',
      amount: 33,
      date: new Date(2025, 1, 1),
      paidBy: members[0],
    }
    const onSubmit = vi.fn()

    render(<ExpenseForm members={members} expense={expense} onSubmit={onSubmit} />)
    const submitButton = screen.getByRole('button')
    fireEvent.click(submitButton)

    expect(onSubmit).toHaveBeenCalledWith(expense)
  })
})
