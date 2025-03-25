import styles from './expense-form.module.css'

import { format, isValid } from 'date-fns'
import { FormEvent, useState } from 'react'

import { Expense } from '../model/expense.ts'

export type ExpenseFormData = {
  title: string
  amount: number
  date: Date
  paidBy: string
}

export type ExpenseFormProps = {
  expense?: Expense
  members: string[]
  onSubmit: (data: ExpenseFormData) => void
}

export function ExpenseForm({ members, expense, onSubmit }: ExpenseFormProps) {
  const [title, setTitle] = useState<string>(expense?.title || '')
  const [amount, setAmount] = useState<string>(expense?.amount.toFixed(2) || '')
  const [date, setDate] = useState<Date>(expense?.date || new Date())
  const [paidBy, setPaidBy] = useState<string>(expense?.paidBy || '')

  const [titleValid, setTitleValid] = useState(true)
  const [amountValid, setAmountValid] = useState(true)
  const [dateValid, setDateValid] = useState(true)

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setTitleValid(true)
    setTitle(value)
  }

  function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setAmountValid(true)
    setAmount(value)
  }

  function handleDateChanged(e: React.ChangeEvent<HTMLInputElement>) {
    const value = new Date(e.target.value)
    const newDate = isValid(value) ? new Date(value) : new Date()
    setDateValid(true)
    setDate(newDate)
  }

  function handlePaidByChanged(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value
    setPaidBy(value)
  }

  function validateForm(): ExpenseFormData | null {
    let allValid = true
    if (title.length === 0) {
      setTitleValid(false)
      allValid = false
    }

    const parsedAmount = parseFloat(amount)
    if (parsedAmount < 0 || isNaN(parsedAmount) || !isFinite(parsedAmount)) {
      setAmountValid(false)
      allValid = false
    }

    if (!date) {
      setDateValid(false)
      allValid = false
    }

    if (!allValid) {
      return null
    }

    return {
      title: `${title}`,
      amount: parsedAmount,
      date,
      paidBy,
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const validatedFormData = validateForm()

    if (validatedFormData) {
      onSubmit(validatedFormData)
    }
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.set}>
          <label htmlFor="title" className={titleValid ? styles.set_label : styles['set_label--invalid']}>
            Title
          </label>
          <input name="title" id="title" className={styles.set_input} onChange={handleTitleChange} value={title} />
        </div>
        <div className={styles.set}>
          <label htmlFor="amount" className={amountValid ? styles.set_label : styles['set_label--invalid']}>
            Amount
          </label>
          <input name="amount" id="amount" className={styles.set_input} onChange={handleAmountChange} value={amount} />
        </div>
        <div className={styles.set}>
          <label htmlFor="date" className={dateValid ? styles.set_label : styles['set_label--invalid']}>
            Date
          </label>
          <input
            name="date"
            id="date"
            type="date"
            className={styles.set_input}
            onChange={handleDateChanged}
            value={format(date, 'yyyy-MM-dd')}
          />
        </div>
        <div className={styles.set}>
          <label htmlFor="paidBy" className={styles.set_label}>
            Paid by
          </label>
          <select className={styles.set_input} onChange={handlePaidByChanged}>
            {members.map((member) => (
              <option key={member} value={member} selected={member === paidBy}>
                {member}
              </option>
            ))}
          </select>
        </div>
        <button className={styles.submit}>Submit</button>
      </form>
    </>
  )
}
