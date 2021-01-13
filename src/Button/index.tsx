import React from 'react'
import { Rate } from 'antd'
import 'antd/es/rate/index.css'
// import { add } from 'fed-utils'

import PrimaryButton from './PrimaryButton'
interface Props {
  text: string
}

// console.log(add(2, 2))
const Button: React.FunctionComponent<Props> = ({ text }) => (
  <React.Fragment>
    <button>{text}</button>
    <Rate />
    <PrimaryButton text='button' />
  </React.Fragment>
)

export default Button