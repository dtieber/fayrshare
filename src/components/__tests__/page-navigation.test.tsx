import { render, screen } from '@testing-library/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'

import { PageNavigation } from '../page-navigation.tsx'

describe('<PageNavigation>', () => {
  it('should render and contain link to expense group overview', () => {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <PageNavigation />,
      },
    ])

    render(<RouterProvider router={router} />)

    expect(screen.getByText('Expense Groups', { selector: 'a' })).toBeTruthy()
  })
})
