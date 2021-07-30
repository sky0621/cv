import differenceInCalendarYears from 'date-fns/differenceInCalendarYears'
import format from 'date-fns/format'

export class CalculationService {
  ageFromBirthday(b: string | undefined): string {
    if (!b) return '?'
    const ymd = b.split('-')
    if (ymd.length !== 3) return '?'
    try {
      const y = parseInt(ymd[0], 10)
      const m = parseInt(ymd[1], 10)
      const d = parseInt(ymd[2], 10)
      const bDay = new Date(y, m - 1, d)
      const now = new Date()
      const diff = differenceInCalendarYears(now, bDay)
      return diff.toString(10)
    } catch (e) {
      console.error(e)
    }
    return '?'
  }

  now(): string {
    return format(new Date(), 'yyyy-MM-dd')
  }
}
