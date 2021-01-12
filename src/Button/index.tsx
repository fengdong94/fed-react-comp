import React from 'react'
import PrimaryButton from './PrimaryButton'

interface Props {
  text: string
}

const Button: React.FunctionComponent<Props> = ({ text }) => (
  <React.Fragment>
    <button>{text}</button>
    <PrimaryButton text='button' />
  </React.Fragment>
)

export default Button