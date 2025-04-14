import styles from './expense-list.module.css'

import { format } from 'date-fns'
import { useState } from 'react'
import { NavLink, useRouteLoaderData } from 'react-router-dom'

import { PageContent } from '../components/page-content.tsx'
import { PageHeader } from '../components/page-header.tsx'
import { ExpenseGroup } from '../model/expense-group.ts'

export function ExpenseList() {
  const data = useRouteLoaderData('expenses') as ExpenseGroup
  const [members, setMembers] = useState<string[]>(data.members)
  const [emailEntered, setEmailEntered] = useState<string>('')
  const [emailValid, setEmailValid] = useState(true)

  function handleEmailKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    setEmailValid(true)

    if (e.key !== 'Enter') {
      return
    }

    if (!emailEntered.includes('@') || members.includes(emailEntered)) {
      setEmailValid(false)
      return
    }

    setMembers((prevMembers) => [...prevMembers, emailEntered])
    setEmailEntered('')
  }

  function handleEmailEntered(e: React.ChangeEvent<HTMLInputElement>) {
    setEmailEntered(e.currentTarget.value)
  }

  return (
    <>
      <PageHeader title={data.name}>
        <NavLink to="new" className={styles.addLink}>
          Add Expense
        </NavLink>
      </PageHeader>
      <PageContent>
        <div className={styles.members}>
          <span className={styles.members__label}>Members:</span>
          {members.map((member) => (
            <span key={member} className={styles.members__tag}>
              {member}
            </span>
          ))}
          <div className={styles.addMember}>
            <input
              name="addMember"
              id="addMember"
              onChange={handleEmailEntered}
              onKeyDown={handleEmailKeyDown}
              value={emailEntered}
              className={emailValid ? styles.addMember__input : styles['addMember__input--invalid']}
            />
          </div>
        </div>
        <ul className={styles.list}>
          {data.expenses.map((expense) => (
            <li key={expense.id} className={styles.listItem}>
              <div className={styles.listItem__container}>
                <div className={styles.listItem__main}>
                  <p className={styles.listItem__title}>
                    <NavLink to={expense.id.toString()}>{expense.title}</NavLink>
                  </p>
                  <p className={styles.listItem__date}>{format(expense.date, 'MMMM do y')}</p>
                </div>
                <div className={styles.listItem__amount}>EUR {expense.amount.toFixed(2)}</div>
              </div>
            </li>
          ))}
        </ul>
        <NavLink to="/" className={styles.backLink}>
          Back
        </NavLink>
      </PageContent>
    </>
  )
}
