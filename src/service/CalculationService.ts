import differenceInCalendarYears from 'date-fns/differenceInCalendarYears'
import format from 'date-fns/format'

export class CalculationService {
  ageFromBirthday(b: string | undefined): string {
    if (!b) return '?'
    const ymd = b.split('-')
    if (ymd.length !== 3) return '?'
    const bDay = new Date(ymd[0], ymd[1] - 1, ymd[2])
    const now = new Date()
    const diff = differenceInCalendarYears(now, bDay)
    return diff
  }

  now(): string {
    return format(new Date(), 'yyyy-MM-dd')
  }
}
