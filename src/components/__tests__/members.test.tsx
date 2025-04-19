import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { Members } from '../members'

describe('<Members>', () => {
  it('should display member tags', () => {
    const members = ['nadine@mail.com', 'daniel@mail.com']

    render(<Members members={members} onMemberAdded={(_) => {}} />)

    expect(screen.queryByText('nadine@mail.com')).toBeTruthy()
    expect(screen.queryByText('daniel@mail.com')).toBeTruthy()
  })

  it('should fire event when member gets added', () => {
    const memberAdded = vi.fn()
    const newMember = 'nadine@mail.com'

    render(<Members members={[]} onMemberAdded={memberAdded} />)
    const input = screen.getByLabelText('member-input')
    fireEvent.input(input, {target: {value: `${newMember}`}})
    fireEvent.keyDown(input, {key: 'Enter'})

    expect(memberAdded).toHaveBeenCalledWith('nadine@mail.com')
  })
})
