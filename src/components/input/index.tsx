import React, { useState } from 'react';
import { useWindowDimensions, TextInput } from 'react-native';
import { makeStyles } from './styles';
import { color } from '../../themes/color';
import { TextInputMask } from 'react-native-masked-text';

export interface InputProps {
  placeholder: string;
  onChange: (t: string) => void;
  password?: boolean;
  hide?: boolean;
  cep?: boolean;
  cpfOrCnpj?: string;
  birthDate?: boolean;
  phone?: boolean;
  valueText?: string;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  onChange,
  password,
  hide,
  cep,
  cpfOrCnpj,
  birthDate,
  phone,
  valueText,
}) => {
  const { fontScale } = useWindowDimensions();
  const styles = makeStyles(fontScale);

  const [value, setValue] = useState('');

  const handleValue = async (value: string) => {
    setValue(value);
    onChange(value);
    valueText = value;
  };

  if (hide) return;

  if (cep)
    return (
      <TextInputMask
        type='zip-code'
        onChangeText={(t: string) => {
          handleValue(t);
        }}
        selectionColor={color.purple}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={color.ofuscatedBlack}
        value={valueText}
      />
    );

  if (cpfOrCnpj === 'CPF')
    return (
      <TextInputMask
        type='cpf'
        onChangeText={(t: string) => {
          handleValue(t);
        }}
        selectionColor={color.purple}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={color.ofuscatedBlack}
        value={valueText}
      />
    );

  if (cpfOrCnpj === 'CNPJ')
    return (
      <TextInputMask
        type='cnpj'
        onChangeText={(t: string) => {
          handleValue(t);
        }}
        selectionColor={color.purple}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={color.ofuscatedBlack}
        value={valueText}
      />
    );

  if (birthDate)
    return (
      <TextInputMask
        type='datetime'
        options={{ format: 'DD/MM/YYYY' }}
        onChangeText={(t: string) => {
          handleValue(t);
        }}
        selectionColor={color.purple}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={color.ofuscatedBlack}
        value={valueText}
      />
    );

  if (phone)
    return (
      <TextInputMask
        type='cel-phone'
        onChangeText={(t: string) => {
          handleValue(t);
        }}
        selectionColor={color.purple}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={color.ofuscatedBlack}
        value={valueText}
      />
    );

  return (
    <TextInput
      selectionColor={color.purple}
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={color.ofuscatedBlack}
      value={valueText}
      onChangeText={(t: any) => handleValue(t)}
      secureTextEntry={password}
    />
  );
};
