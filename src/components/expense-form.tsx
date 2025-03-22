import styles from './expense-form.module.css'

import { format, isValid } from 'date-fns'
import { FormEvent, useState } from 'react'

export type ExpenseFormData = {
  title: string
  amount: number
  date: Date
}

export type ExpenseFormProps = {
  onSubmit: (data: ExpenseFormData) => void
}

export function ExpenseForm({ onSubmit }: ExpenseFormProps) {
  const [title, setTitle] = useState<string>('')
  const [amount, setAmount] = useState<string>('')
  const [date, setDate] = useState<Date>(new Date())

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
        <button className={styles.submit}>Submit</button>
      </form>
    </>
  )
}
