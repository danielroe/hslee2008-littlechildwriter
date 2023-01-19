const DAY_MILLISECONDS = 1000 * 60 * 60 * 24

export const formatter = (number: number) =>
  new Intl.NumberFormat('ko-kr', {
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: 1
  }).format(Math.round(number))

export const DateFormatter = (time: number) => {
  const rtf = new Intl.RelativeTimeFormat('ko-kr', {
    numeric: 'auto'
  })

  // date
  const daysDifference = Math.round(
    (time - new Date().getTime()) / DAY_MILLISECONDS
  )

  // year
  if (daysDifference <= -350) {
    const yearDifference = Math.round(daysDifference / 365)
    return rtf.format(yearDifference, 'year')
  }

  // month
  if (daysDifference <= -28) {
    const monthDifference = Math.round(daysDifference / 28)
    return rtf.format(monthDifference, 'month')
  }

  // day
  if (daysDifference <= -1) {
    return rtf.format(daysDifference, 'day')
  }

  if (rtf.format(daysDifference, 'hour') === '현재 시간') return '방금 전'

  return rtf.format(daysDifference, 'hour')
}
