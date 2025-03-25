import styles from './page-content.module.css'

export type PageContentProps = {
  children?: React.ReactNode
}

export function PageContent({ children }: PageContentProps) {
  return (
    <main className={styles.main}>
      <div className={styles.main__container}>{children}</div>
    </main>
  )
}
