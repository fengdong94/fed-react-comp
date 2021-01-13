import * as React from 'react'

interface Props {
  text: string
  onClick: () => void
}

const PrimaryButton: React.FC<Props> = ({ text, onClick }) => (
  <button onClick={onClick} style={{ background: '#4df' }}>
    {text}
  </button>
)

export default PrimaryButton
