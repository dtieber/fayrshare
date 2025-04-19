import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { PageContent } from '../page-content.tsx'

describe('<PageContent>', () => {
  it('should render children', () => {
    render(
      <PageContent>
        <div data-testid="content-child"></div>
      </PageContent>,
    )

    expect(screen.getByTestId('content-child')).toBeTruthy()
  })
})
