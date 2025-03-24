export type PageContentProps = {
  children?: React.ReactNode
}

export function PageContent({ children }: PageContentProps) {
  return <main>{children}</main>
}
