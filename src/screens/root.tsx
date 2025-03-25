import { Outlet } from 'react-router-dom'

import { PageContainer } from '../components/page-container.tsx'
import { PageNavigation } from '../components/page-navigation.tsx'

export function Root() {
  return (
    <PageContainer>
      <PageNavigation />
      <Outlet />
    </PageContainer>
  )
}
