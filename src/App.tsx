import './App.css'

import { Button, Space } from 'antd'
import { useState } from 'react'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ padding: '0 24px' }}>
        <Space>
          <Button type="primary" onClick={() => setCount((count) => count + 1)}>
            +1
          </Button>
          <p>count is {count}</p>
        </Space>
      </div>
    </>
  )
}
