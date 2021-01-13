import React from 'react'
import Button from '.'

export default { title: 'Button' }

export const primary: React.FC = () => <Button type='primary'>primary</Button>
export const secondary: React.FC = () => (
  <Button type='secondary'>secondary</Button>
)
export const third: React.FC = () => <Button type='third'>third</Button>
