import * as React from 'react'

interface Props {
  text: string
}

const MyComponent: React.FunctionComponent<Props> = ({ text }) => (
  <div role='heading'>My First Component {text}</div>
)

export default MyComponent
