import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { PageContainer } from '../page-container.tsx'

describe('<PageContainer>', () => {
  it('should render children', () => {
    render(
      <PageContainer>
        <div data-testid="container-child"></div>
      </PageContainer>,
    )

    expect(screen.getByTestId('container-child')).toBeTruthy()
  })
})
