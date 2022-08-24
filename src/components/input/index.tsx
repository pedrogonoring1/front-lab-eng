import React, { useState } from 'react'
import { useWindowDimensions, TextInput } from 'react-native'
import { makeStyles } from './styles'
import { color } from '../../themes/color'

export interface InputProps {
  placeholder: string
}

export const Input: React.FC<InputProps> = ({ placeholder }) => {
  const { fontScale } = useWindowDimensions()
  const styles = makeStyles(fontScale)

  const [text, setText] = useState<string>('')

  return (
    <TextInput
      selectionColor={color.purple}
      style={styles.button}
      placeholder={placeholder}
      placeholderTextColor={color.ofuscatedBlack}
      value={text}
      onChange={(t) => setText(t)}
    />
  )
}
