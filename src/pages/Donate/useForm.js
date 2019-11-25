import { useCallback, useEffect, useMemo } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useSnackbar } from 'notistack';
import * as R from 'ramda';

const DONATE = gql`
  mutation($input: DonationInputType!) {
    donate(input: $input) {
      sender {
        id
        wallet {
          id
          balance
          toOffer
          received
        }
      }
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
      .min(5)
      .label('Motivo')
      .required(),
    quantity: Yup.number()
      .integer()
      .moreThan(0)
      .label('Quantidade')
      .required(),
  });

  const onSubmit = useCallback(input => donate({ variables: { input } }), [donate]);

  const { errors, values, isSubmitting, setErrors, ...formik } = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
  });

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (R.isEmpty(errors) || !isSubmitting) return;
    R.forEach(error => enqueueSnackbar(error, { variant: 'error' }), R.values(errors));
    setErrors({});
  }, [enqueueSnackbar, errors, isSubmitting, setErrors]);

  return {
    ...formik,
    ...values,
  };
};
