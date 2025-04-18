import styles from './expense-list.module.css'

import { format } from 'date-fns'
import { useState } from 'react'
import { NavLink, useRouteLoaderData } from 'react-router-dom'

import { Members } from '../components/members.tsx'
import { PageContent } from '../components/page-content.tsx'
import { PageHeader } from '../components/page-header.tsx'
import { ExpenseGroup } from '../model/expense-group.ts'

export function ExpenseList() {
  const data = useRouteLoaderData('expenses') as ExpenseGroup
  const [members, setMembers] = useState<string[]>(data.members)

  function handleMembersChanged(members: string[]): void {
    setMembers(members)
  }

  return (
    <>
      <PageHeader title={data.name}>
        <NavLink to="new" className={styles.addLink}>
          Add Expense
        </NavLink>
      </PageHeader>
      <PageContent>
        <Members members={members} onMembersChanged={handleMembersChanged} />
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
