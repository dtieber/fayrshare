import styles from './expense-group-overview.module.css'

import { NavLink, useRouteLoaderData } from 'react-router-dom'

import { PageContent } from '../components/page-content.tsx'
import { PageHeader } from '../components/page-header.tsx'
import { ExpenseGroup } from '../model/expense-group.ts'

export function ExpenseGroupOverview() {
  const data = useRouteLoaderData('expense-groups') as { expenseGroups: ExpenseGroup[] }

  return (
    <>
      <PageHeader title={'Expense Groups'} />
      <PageContent>
        <ul className={styles.list}>
          {data.expenseGroups.map((group) => (
            <li key={group.id} className={styles.listItem}>
              <div className={styles.listItem__container}>
                <p className={styles.listItem__id}>{group.id}</p>
                <div className={styles.listItem__main}>
                  <p className={styles.listItem__title}>
                    <NavLink to={`${group.id}`}>{group.name}</NavLink>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </PageContent>
    </>
  )
}
