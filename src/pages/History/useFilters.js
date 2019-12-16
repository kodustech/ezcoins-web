import { useCallback, useEffect, useMemo, useState } from 'react';
import { addMonths, endOfMonth, startOfMonth, isValid } from 'date-fns';
import * as Yup from 'yup';
import { useFormik } from 'formik';

export default loadDonations => {
  const maxEndDate = useMemo(() => endOfMonth(addMonths(new Date(), -1)), []);

  const [maxStartDate, setMaxStartDate] = useState(maxEndDate);

  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        maxDate: Yup.date()
          .label('Data final')
          .required()
          .max(maxEndDate, 'Somente doações de meses anteriores'),
        minDate: Yup.date()
          .label('Data inicial')
          .required()
          .when('maxDate', (maxDateValue, schema) =>
            schema.max(
              isValid(maxDateValue) ? maxDateValue : maxEndDate,
              'Deve ser anterior a data final',
            ),
          ),
        receiverUserId: Yup.string().label('De'),
        senderUserId: Yup.string().label('Para'),
      }),
    [maxEndDate],
  );

  const initialValues = useMemo(
    () => ({
      minDate: startOfMonth(maxEndDate),
      maxDate: maxEndDate,
      receiverUserId: '',
      senderUserId: '',
    }),
    [maxEndDate],
  );

  const onSubmit = useCallback(
    filters => {
      setMaxStartDate(filters.maxDate);
      loadDonations({ variables: { filters } });
    },
    [loadDonations],
  );

  const {
    handleChange,
    handleSubmit,
    setFieldValue,
    values: { maxDate, minDate, receiverUserId, senderUserId },
    errors: { maxDate: maxDateMessage, minDate: minDateMessage },
  } = useFormik({
    validationSchema,
    initialValues,
    onSubmit,
  });

  const onChangeMaxDate = useCallback(value => setFieldValue('maxDate', value), [setFieldValue]);

  const onChangeMinDate = useCallback(value => setFieldValue('minDate', value), [setFieldValue]);

  const maxDateProps = useMemo(
    () => ({
      value: maxDate,
      onChange: onChangeMaxDate,
      maxDate: maxEndDate,
      maxDateMessage,
    }),
    [maxDate, onChangeMaxDate, maxEndDate, maxDateMessage],
  );

  const minDateProps = useMemo(
    () => ({
      value: minDate,
      onChange: onChangeMinDate,
      maxDate: maxStartDate,
      maxDateMessage: minDateMessage,
    }),
    [maxStartDate, minDate, minDateMessage, onChangeMinDate],
  );

  const receiverUserProps = useMemo(
    () => ({
      value: receiverUserId,
      onChange: handleChange,
    }),
    [handleChange, receiverUserId],
  );

  const senderUserProps = useMemo(
    () => ({
      value: senderUserId,
      onChange: handleChange,
    }),
    [handleChange, senderUserId],
  );

  useEffect(() => {
    if (!minDateMessage && !maxDateMessage) handleSubmit();
  }, [
    handleSubmit,
    loadDonations,
    maxDate,
    minDate,
    receiverUserId,
    senderUserId,
    minDateMessage,
    maxDateMessage,
  ]);

  return {
    maxDateProps,
    minDateProps,
    receiverUserProps,
    senderUserProps,
  };
};
