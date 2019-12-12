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
        minDate: Yup.date()
          .label('Data inicial')
          .required()
          .when('maxDate', (maxDateValue, schema) =>
            schema.max(
              isValid(maxDateValue) ? maxDateValue : maxEndDate,
              'Deve ser anterior a data final',
            ),
          ),
        maxDate: Yup.date()
          .label('Data final')
          .required()
          .max(maxEndDate, 'Somente doações de meses anteriores'),
      }),
    [maxEndDate],
  );

  const initialValues = useMemo(
    () => ({
      minDate: startOfMonth(maxEndDate),
      maxDate: maxEndDate,
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
    handleSubmit,
    setFieldValue,
    values: { maxDate, minDate },
    errors: { maxDate: maxDateMessage, minDate: minDateMessage },
  } = useFormik({
    validationSchema,
    initialValues,
    onSubmit,
  });

  const onChangeMinDate = useCallback(value => setFieldValue('minDate', value), [setFieldValue]);

  const onChangeMaxDate = useCallback(value => setFieldValue('maxDate', value), [setFieldValue]);

  const minDateProps = useMemo(
    () => ({
      value: minDate,
      onChange: onChangeMinDate,
      maxDate: maxStartDate,
      maxDateMessage: minDateMessage,
    }),
    [maxStartDate, minDate, minDateMessage, onChangeMinDate],
  );

  const maxDateProps = useMemo(
    () => ({
      value: maxDate,
      onChange: onChangeMaxDate,
      maxDate: maxEndDate,
      maxDateMessage,
    }),
    [maxDate, onChangeMaxDate, maxEndDate, maxDateMessage],
  );

  useEffect(() => {
    if (!minDateMessage && !maxDateMessage) handleSubmit();
  }, [handleSubmit, loadDonations, minDate, maxDate, minDateMessage, maxDateMessage]);

  return {
    minDateProps,
    maxDateProps,
  };
};
