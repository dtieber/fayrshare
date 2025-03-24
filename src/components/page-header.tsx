import styles from './page-header.module.css'

export type PageHeaderProps = {
  title: string
  children?: React.ReactNode
}

export function PageHeader({ title, children }: PageHeaderProps) {
  return (
    <header>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </header>
  )
}
