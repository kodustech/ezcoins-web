import { useCallback, useEffect, useMemo } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useSnackbar } from 'notistack';
import * as R from 'ramda';

const DONATIONS = gql`
  query {
    donations {
      id
      quantity
      reason
      sender {
        id
        email
      }
      receiver {
        id
        email
      }
    }
  }
`;

const DONATE = gql`
  mutation($input: DonationInputType!) {
    donate(input: $input) {
      id
      quantity
      reason
      sender {
        id
        email
      }
      receiver {
        id
        email
      }
    }
  }
`;

const USER = gql`
  query($id: ID) {
    user(id: $id) {
      id
      email
      wallet {
        id
        toOffer
        received
        balance
      }
    }
  }
`;

export default () => {
  const [donate] = useMutation(DONATE, {
    update: (cache, { data: { donate: donated } }) => {
      const variables = { id: donated.sender.id };
      const { user } = cache.readQuery({ query: USER, variables });

      const updatePath = (arr, obj, fn) => R.assocPath(arr, fn(R.path(arr, obj)), obj);

      cache.writeQuery({
        query: USER,
        variables,
        data: {
          user: updatePath(['wallet', 'toOffer'], user, prev => prev - donated.quantity),
        },
      });

      try {
        const { donations } = cache.readQuery({ query: DONATIONS });
        cache.writeQuery({
          query: DONATIONS,
          data: { donations: R.append(donated, donations) },
        });
      } catch {} // eslint-disable-line no-empty
    },
  });

  const { enqueueSnackbar } = useSnackbar();

  const initialValues = useMemo(
    () => ({
      receiverUserId: '',
      reason: '',
      quantity: 0,
    }),
    [],
  );

  const validationSchema = Yup.object().shape({
    receiverUserId: Yup.string()
      .label('Destinatário')
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

  const onSubmit = useCallback(
    async (input, { resetForm }) => {
      await donate({ variables: { input } });
      enqueueSnackbar('Doado com sucesso!', { variant: 'success' });
      resetForm();
    },
    [donate, enqueueSnackbar],
  );

  const { errors, values, isSubmitting, setErrors, ...formik } = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
  });

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
