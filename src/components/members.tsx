import styles from './members.module.css'

import { useState } from 'react'

type MembersProps = {
  members: string[]
  onMembersChanged: (members: string[]) => void
}

export function Members({ members, onMembersChanged }: MembersProps) {
  const [emailEntered, setEmailEntered] = useState<string>('')
  const [emailValid, setEmailValid] = useState(true)

  function handleEmailEntered(e: React.ChangeEvent<HTMLInputElement>) {
    setEmailEntered(e.currentTarget.value)
  }

  function handleEmailKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    setEmailValid(true)

    if (e.key !== 'Enter') {
      return
    }

    if (!emailEntered.includes('@') || members.includes(emailEntered)) {
      setEmailValid(false)
      return
    }

    onMembersChanged([...members, emailEntered])
    setEmailEntered('')
  }

  function handleRemove(member: string) {
    onMembersChanged(members.filter((m) => m !== member))
  }

  return (
    <div className={styles.members}>
      <span className={styles.members__label}>Members:</span>
      {members.map((member) => (
        <span key={member} className={styles.members__tag}>
          {member}
          <button onClick={() => handleRemove(member)} className={styles.members__remove}>
            x
          </button>
        </span>
      ))}
      <div className={styles.addMember}>
        <input
          name="addMember"
          id="addMember"
          aria-label="member-input"
          onChange={handleEmailEntered}
          onKeyDown={handleEmailKeyDown}
          value={emailEntered}
          className={emailValid ? styles.addMember__input : styles['addMember__input--invalid']}
        />
      </div>
    </div>
  )
}
