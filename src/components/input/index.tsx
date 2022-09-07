import React, { useState } from 'react'
import { useWindowDimensions, TextInput, TextInputProps } from 'react-native'
import { makeStyles } from './styles'
import { color } from '../../themes/color'

export interface InputProps {
  placeholder: string
  onChange: (t: string) => void
  password?: boolean
}

export const Input: React.FC<InputProps> = ({ placeholder, onChange, password }) => {
  const { fontScale } = useWindowDimensions()
  const styles = makeStyles(fontScale)

  const [value, setValue] = useState('')

  const handleValue = (value: string) => {
    setValue(value)
    onChange(value)
  }

  return (
    <TextInput
      selectionColor={color.purple}
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={color.ofuscatedBlack}
      value={value}
      onChangeText={(t: any) => handleValue(t)}
      secureTextEntry={password}
    />
  )
}
