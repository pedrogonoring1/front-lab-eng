import React, { useState } from 'react'
import { useWindowDimensions, TextInput, TextInputProps } from 'react-native'
import { makeStyles } from './styles'
import { color } from '../../themes/color'

export interface InputProps extends TextInputProps {
  placeholder: string
}

export const Input: React.FC<InputProps> = ({ placeholder }) => {
  const { fontScale } = useWindowDimensions()
  const styles = makeStyles(fontScale)

  const [text, setText] = useState<string>('')

  return (
    <TextInput
      selectionColor={color.purple}
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={color.ofuscatedBlack}
      value={text}
      onChange={(t) => setText(t)}
    />
  )
}
