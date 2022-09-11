import { DateFormatsEnum } from '../enums/date-format.enum'

export function formatDate(date: string, format: DateFormatsEnum) {
  // eslint-disable-next-line default-case
  switch (format) {
    case DateFormatsEnum['d-mo-y']:
      return new Date(date)
        .toLocaleDateString('ru-RU', {
          day: '2-digit',
          year: 'numeric',
          month: '2-digit',
        })
        .replaceAll(`/`, '.')
    case DateFormatsEnum['mo-y']:
      return new Date(date)
        .toLocaleDateString('ru-RU', {
          day: '2-digit',
          year: 'numeric',
          month: 'long',
        })
        .replace(`/`, '.')
  }
}
