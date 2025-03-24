import { Outlet } from 'react-router-dom'

import { PageContainer } from '../components/page-container.tsx'

export function Root() {
  return (
    <PageContainer>
      <Outlet />
    </PageContainer>
  )
}
