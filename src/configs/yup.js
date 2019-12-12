import { setLocale } from 'yup';
import { map } from 'ramda';
import { isDate, format } from 'date-fns';
import i18next from './locales';

const formatDates = map(v => (isDate(v) ? format(v, 'dd/MM/yyyy') : v));

setLocale({
  date: {
    min: vars => i18next.t('date.min', formatDates(vars)),
    max: vars => i18next.t('date.max', formatDates(vars)),
  },
  mixed: {
    default: vars => i18next.t('mixed.default', vars),
    required: vars => i18next.t('mixed.required', vars),
    oneOf: vars => i18next.t('mixed.oneOf', vars),
    notOneOf: vars => i18next.t('mixed.  notOneOf', vars),
  },
  number: {
    moreThan: vars => i18next.t('number.moreThan', vars),
  },
  string: {
    length: vars => i18next.t('string.length', vars),
    min: vars => i18next.t('string.min', vars),
    max: vars => i18next.t('string.max', vars),
    matches: vars => i18next.t('string.matches', vars),
    email: vars => i18next.t('string.email', vars),
    url: vars => i18next.t('string.url', vars),
    trim: vars => i18next.t('string.trim', vars),
    lowercase: vars => i18next.t('string.lowercase', vars),
    uppercase: vars => i18next.t('string.uppercase', vars),
  },
});
