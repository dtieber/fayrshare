import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { PageHeader } from '../page-header.tsx'

describe('<PageHeader>', () => {
  it('should display title as heading 2', () => {
    render(
      <PageHeader title="Page Title">
        <div data-testid="header-child"></div>
      </PageHeader>,
    )

    expect(screen.getByText('Page Title', { selector: 'h2' })).toBeTruthy()
  })

  it('should render children', () => {
    render(
      <PageHeader title="Page Title">
        <div data-testid="header-child"></div>
      </PageHeader>,
    )

    expect(screen.getByTestId('header-child')).toBeTruthy()
  })
})
