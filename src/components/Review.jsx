import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import * as yup from 'yup';
import theme from '../theme';
import useReview from '../hooks/useReview';
import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: 10,
  },
});

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner name is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number()
    .required('Rating is required')
    .min(0)
    .max(100),
  review: yup
    .string(),
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: ''
};

const ReviewContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput name="text" placeholder="Review text" />
      <Pressable onPress={onSubmit} style={theme.buttonPrimary}>
        <Text color="white" fontWeight='bold' fontSize='subheading'>Create a review</Text>
      </Pressable>
    </View>
  );
};

const Review = () => {
  const [sendReview] = useReview();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;

    try {
      const result = await sendReview({ ownerName, repositoryName, rating: parseInt(rating), text });
      const repoId = result.data.createReview.repositoryId;
      history.push(`/repositories/${repoId}`);
    } catch (e) {
      console.log('error:', e);
    }
  };

  return <ReviewContainer onSubmit={onSubmit} />;
};

export default Review;