import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import * as yup from 'yup';
import theme from '../theme';
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(1)
    .max(30),
  password: yup
    .string()
    .required('Password is required')
    .min(5)
    .max(50),
  passwordConfirmation: yup
    .string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('password'), null])
});

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: 10,
  },
});

const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" />
      <FormikTextInput name="passwordConfirmation" placeholder="PasswordConfirmation" />
      <Pressable onPress={onSubmit} style={theme.buttonPrimary}>
        <Text color="white" fontWeight='bold' fontSize='subheading'>Sign up</Text>
      </Pressable>
    </View>
  );
};

const SignUp = () => {
  const [createUser] = useSignUp();
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const result = await createUser({ username, password });
      console.log('result', result);

      if (result.data.createUser.username === username) {
        await signIn({ username, password });
        history.push('/');
      }
    } catch (e) {
      console.log('error:', e);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;