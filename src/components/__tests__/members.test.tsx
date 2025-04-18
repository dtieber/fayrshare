import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { Members } from '../members'

describe('<Members>', () => {
  it('should display member tags', () => {
    const members = ['nadine@mail.com', 'daniel@mail.com']

    render(<Members members={members} onMembersChanged={(_) => {}} />)

    expect(screen.queryByText('nadine@mail.com')).toBeTruthy()
    expect(screen.queryByText('daniel@mail.com')).toBeTruthy()
  })

  it('should fire event when with updated members array when member gets added', () => {
    const memberChanged = vi.fn()

    render(<Members members={['daniel@mail.com']} onMembersChanged={memberChanged} />)
    const input = screen.getByLabelText('member-input')
    fireEvent.input(input, { target: { value: 'nadine@mail.com' } })
    fireEvent.keyDown(input, { key: 'Enter' })

    expect(memberChanged).toHaveBeenCalledWith(['daniel@mail.com', 'nadine@mail.com'])
  })

  it('should prevent duplicate members', () => {
    const memberChanged = vi.fn()

    render(<Members members={['daniel@mail.com']} onMembersChanged={memberChanged} />)
    const input = screen.getByLabelText('member-input')
    fireEvent.input(input, { target: { value: 'daniel@mail.com' } })
    fireEvent.keyDown(input, { key: 'Enter' })

    expect(memberChanged).not.toHaveBeenCalled()
  })

  it('should prevent invalid email addresses', () => {
    const memberChanged = vi.fn()

    render(<Members members={['daniel@mail.com']} onMembersChanged={memberChanged} />)
    const input = screen.getByLabelText('member-input')
    fireEvent.input(input, { target: { value: 'INVALID-FORMAT' } })
    fireEvent.keyDown(input, { key: 'Enter' })

    expect(memberChanged).not.toHaveBeenCalled()
  })

  it('should fire event when with updated members array when member gets removed', () => {
    const memberChanged = vi.fn()

    render(<Members members={['daniel@mail.com', 'nadine@mail.com']} onMembersChanged={memberChanged} />)
    const tag = screen.getByText(/^daniel@mail.com/)
    const remove = within(tag).getByText('x')
    fireEvent.click(remove)

    expect(memberChanged).toHaveBeenCalledWith(['nadine@mail.com'])
  })
})
