import * as React from 'react'

interface Props {
  text: string
}

const PrimaryButton: React.FunctionComponent<Props> = ({ text }) => (
  <button style={{ background: '#4df' }}>{text}</button>
)

export default PrimaryButton