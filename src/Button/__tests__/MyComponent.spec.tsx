import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button from '..'

test('Renders', async () => {
  const { getByRole } = render(<Button text='ss' />)
  expect(getByRole('heading')).toHaveTextContent('My First Component')
})
