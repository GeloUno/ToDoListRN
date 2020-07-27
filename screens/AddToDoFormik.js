import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import {globalStyles} from '../global/globalStyles';
import {Formik} from 'formik';
import * as yup from 'yup';

const validationFormSchema = yup.object({
  name: yup
    .string()
    .required('Nazwa jest wymagane')
    .min(3, 'minimum 3 znaki'),
  body: yup
    .string()
    .required('Opis jest wymagany')
    .min(8, 'minimum 8 znaków'),
  rating: yup
    .string()
    .required('Liczba jest wymagana')
    .test('is-number-1-5', 'Zakres od 1 do 5', val => {
      return parseInt(val) && parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export const AddToDoFormik = ({setModalShow, addPersons}) => {
  return (
    <Formik
      initialValues={{name: '', body: '', rating: ''}}
      validationSchema={validationFormSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
        addPersons(values);
      }}>
      {props => (
        <View style={globalStyles.inputView}>
          <TextInput
            style={globalStyles.input}
            onChangeText={props.handleChange('name')}
            onBlur={props.handleBlur('name')}
            value={props.values.name}
            placeholder="name"
          />
          <Text style={globalStyles.errorText}>
            {props.touched.name && props.errors.name}
          </Text>
          <TextInput
            style={globalStyles.input}
            onChangeText={props.handleChange('body')}
            onBlur={props.handleBlur('body')}
            value={props.values.body}
            placeholder="body"
          />
          <Text style={globalStyles.errorText}>
            {props.touched.body && props.errors.body}
          </Text>
          <TextInput
            style={globalStyles.input}
            onChangeText={props.handleChange('rating')}
            onBlur={props.handleBlur('rating')}
            value={props.values.rating}
            placeholder="rating (1-5)"
            keyboardType="phone-pad"
          />
          <Text style={globalStyles.errorText}>
            {props.touched.rating && props.errors.rating}
          </Text>

          <Button
            style={globalStyles.inputButton}
            onPress={props.handleSubmit}
            title="Submit"
            disabled={
              !props.values.rating ||
              !props.values.body ||
              !props.values.name ||
              !(
                props.errors.rating === undefined &&
                props.errors.body === undefined &&
                props.errors.name === undefined
              )
            }
          />
        </View>
      )}
    </Formik>
  );
};
