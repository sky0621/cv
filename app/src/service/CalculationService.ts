import format from 'date-fns/format'
import differenceInMonths from 'date-fns/differenceInMonths'
import { intervalToDuration } from 'date-fns'

export class CalculationService {
  ageFromBirthday(year: number, month: number, day: number): string {
    if (year === 0 || month === 0 || day === 0) return '?'
    try {
      const bDay = new Date(year, month - 1, day)
      const now = new Date()
      const interval = intervalToDuration({ start: bDay, end: now })
      const diff = interval.years ?? 0
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

  diffFormat(df: number): string {
    if (df === 0) return ''
    if (df >= 12) {
      const year = Math.floor(df / 12)
      const month = df - year * 12
      if (month == 0) return `${year}年`
      return `${year}年${month}ヶ月`
    }
    return `${df}ヶ月`
  }

  differenceStrInMonths(f: Date, t: Date): string {
    const df = differenceInMonths(f, t) + 1
    return this.diffFormat(df)
  }
}
