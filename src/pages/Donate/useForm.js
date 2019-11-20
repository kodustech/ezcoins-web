import { useCallback, useMemo } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const DONATE = gql`
  mutation($input: DonationInputType!) {
    donate(input: $input) {
      id
    }
  }
`;

export default () => {
  const [donate] = useMutation(DONATE);

  const initialValues = useMemo(
    () => ({
      receiverUserId: '',
      donateAt: new Date().toISOString(),
      reason: '',
      quantity: 0,
    }),
    [],
  );

  const validationSchema = Yup.object().shape({
    receiverUserId: Yup.string()
      .label('Destinatário')
      .required(),
    donateAt: Yup.date()
      .label('Data')
      .required(),
    reason: Yup.string()
      .label('Motivo')
      .required(),
    quantity: Yup.number()
      .integer()
      .min(1)
      .label('Quantidade')
      .required(),
  });

  const onSubmit = useCallback(input => donate({ variables: { input } }), [donate]);

  const { handleSubmit, handleChange, setFieldValue, values } = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
  });

  return {
    handleSubmit,
    handleChange,
    setFieldValue,
    ...values,
  };
};
