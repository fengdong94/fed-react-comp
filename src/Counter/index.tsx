import React, { useCallback, useState } from 'react'
import { Button } from 'antd'
import 'antd/es/button/style/index.css'
// import { add } from 'fed-utils'

import PrimaryButton from './PrimaryButton'

interface Props {
  name: string
}

// console.log(add(2, 2))
const Counter: React.FC<Props> = ({ name }) => {
  const [count, setCount] = useState(10)

  const handleDecrement = useCallback(() => {
    setCount((count) => count + 1)
  }, [])
  const handleIncrement = useCallback(() => {
    setCount((count) => count - 1)
  }, [])

  return (
    <React.Fragment>
      {name}: {count}
      <Button type='primary' onClick={handleDecrement}>
        -
      </Button>
      <PrimaryButton text='+' onClick={handleIncrement} />
    </React.Fragment>
  )
}

export default Counter
