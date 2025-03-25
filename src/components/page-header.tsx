import styles from './page-header.module.css'

export type PageHeaderProps = {
  title: string
  children?: React.ReactNode
}

export function PageHeader({ title, children }: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </div>
    </header>
  )
}
