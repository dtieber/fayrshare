import styles from './members.module.css'

import { useState } from 'react'

type MembersProps = {
  members: string[]
  onMemberAdded: (member: string) => void
}

export function Members({ members, onMemberAdded }: MembersProps) {
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

    onMemberAdded(emailEntered)
    setEmailEntered('')
  }

  return (
    <div className={styles.members}>
      <span className={styles.members__label}>Members:</span>
      {members.map((member) => (
        <span key={member} className={styles.members__tag}>
          {member}
        </span>
      ))}
      <div className={styles.addMember}>
        <input
          name="addMember"
          id="addMember"
          onChange={handleEmailEntered}
          onKeyDown={handleEmailKeyDown}
          value={emailEntered}
          className={emailValid ? styles.addMember__input : styles['addMember__input--invalid']}
        />
      </div>
    </div>
  )
}
