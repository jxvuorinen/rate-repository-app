import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  textInput: {
    padding: 15
  }
});

const FormikTextInput = ({ name, placeholder }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        placeholder={placeholder}
        style={styles.textInput}
        secureTextEntry={name == 'password' ? true : false}
      />
      {showError && <Text style="error">{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;