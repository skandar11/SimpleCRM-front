import { DateFormatsEnum } from '@enums/date-formats.enum'

export function formatDate(date: string, format: DateFormatsEnum) {
  switch (format) {
    case DateFormatsEnum['d-mo-y']:
      return new Date(date)
        .toLocaleDateString('en-us', {
          day: '2-digit',
          year: 'numeric',
          month: '2-digit',
        })
        .replaceAll(`/`, '.')
    case DateFormatsEnum['mo-y']:
      return new Date(date)
        .toLocaleDateString('en-us', {
          year: 'numeric',
          month: '2-digit',
        })
        .replace(`/`, '.')
  }
}
