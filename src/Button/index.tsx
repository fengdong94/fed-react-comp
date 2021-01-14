import React from 'react'
import './index.scss'

export interface Props {
  type: 'primary' | 'secondary' | 'third'
  children: unknown
}

const Button: React.FC<Props> = ({ type, children }) => {
  return (
    <button data-testid='test-component-button' className={`btn ${type}`}>
      {children}
    </button>
  )
}

export default Button
