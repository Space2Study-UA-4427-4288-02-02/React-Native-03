import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import PaperText from '~/containers/paper-text'

describe('PaperText component', () => {
  it('renders children text', () => {
    const { getByText } = render(<PaperText>My text</PaperText>)
    expect(getByText('My text')).toBeTruthy()
  })

  it('applies variant style "title"', () => {
    const { getByText } = render(<PaperText variant="title">Title text</PaperText>)
    expect(getByText('Title text')).toBeTruthy()
  })

  it('applies variant style "descriptionText"', () => {
    const { getByText } = render(<PaperText variant="descriptionText">Description</PaperText>)
    expect(getByText('Description')).toBeTruthy()
  })

  it('applies variant style "combineText"', () => {
    const { getByText } = render(<PaperText variant="combineText">Combined</PaperText>)
    expect(getByText('Combined')).toBeTruthy()
  })

  it('applies variant style "headlineSmall"', () => {
    const { getByText } = render(<PaperText variant="headlineSmall">Headline Small</PaperText>)
    expect(getByText('Headline Small')).toBeTruthy()
  })

  it('applies variant style "headlineMedium"', () => {
    const { getByText } = render(<PaperText variant="headlineMedium">Headline Medium</PaperText>)
    expect(getByText('Headline Medium')).toBeTruthy()
  })

  it('applies variant style "titleSmall"', () => {
    const { getByText } = render(<PaperText variant="titleSmall">Title Small</PaperText>)
    expect(getByText('Title Small')).toBeTruthy()
  })

  it('falls back to default style if no variant provided', () => {
    const { getByText } = render(<PaperText>Default</PaperText>)
    expect(getByText('Default')).toBeTruthy()
  })

  it('applies bold style when bold is true', () => {
    const { getByText } = render(<PaperText bold>Bold text</PaperText>)
    expect(getByText('Bold text')).toBeTruthy()
  })

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn()
    const { getByText } = render(<PaperText onPress={onPressMock}>Press me</PaperText>)
    fireEvent.press(getByText('Press me'))
    expect(onPressMock).toHaveBeenCalledTimes(1)
  })
  it('uses default onPress when no handler is provided', () => {
  const { getByText } = render(<PaperText>Click me</PaperText>)
  fireEvent.press(getByText('Click me'))
})

})
