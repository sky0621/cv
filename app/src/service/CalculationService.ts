import differenceInCalendarYears from 'date-fns/differenceInCalendarYears'
import format from 'date-fns/format'

export class CalculationService {
  ageFromBirthday(year: number, month: number, day: number): string {
    if (year === 0 || month === 0 || day === 0) return '?'
    try {
      const bDay = new Date(year, month - 1, day)
      const now = new Date()
      const diff = differenceInCalendarYears(now, bDay)
      return diff.toString(10)
    } catch (e) {
      console.error(e)
    }
    return '?'
  }

  toStrYearMonth(year: number, month: number): string {
    if (year === 0 || month === 0) return '?'
    return `${year} / ${month}`
  }

  now(): string {
    return format(new Date(), 'yyyy-MM-dd')
  }
}
