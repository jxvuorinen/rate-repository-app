import React from 'react';
import { TextInput as NativeTextInput, View } from 'react-native';
import theme from '../theme';

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  return (
    <View style={ error ? theme.inputFieldError : theme.inputField}>
      <NativeTextInput style={textInputStyle} {...props} />
    </View>
  );
};

export default TextInput;