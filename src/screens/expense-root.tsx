import styles from './expense-root.module.css'

import { Outlet } from 'react-router-dom'

export function ExpenseRoot() {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  )
}
