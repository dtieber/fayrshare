import styles from './page-container.module.css'

import { ReactNode } from 'react'

type PageContainerProps = {
  children: ReactNode
}

export function PageContainer({ children }: PageContainerProps) {
  return <div className={styles.container}>{children}</div>
}
