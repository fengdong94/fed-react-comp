import React from 'react'
import './index.scss'

interface Props {
  type: 'primary' | 'secondary' | 'third'
  children: unknown
}

const Button: React.FC<Props> = ({ type, children }) => {
  return <button className={`btn ${type}`}>{children}</button>
}

export default Button
