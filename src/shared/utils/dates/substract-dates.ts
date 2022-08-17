import humanizeDuration from 'humanize-duration'

export function subtractDates(start: string, end: string) {
  return humanizeDuration(Date.parse(end) - Date.parse(start), {
    language: 'ru',
    largest: 2,
    units: ['y', 'mo'],
    round: true,
    delimiter: ' ',
  })
}
