import { WEEK_MS } from './constants'

export function msToWeekCnt(ms) {
  return ~~(ms / WEEK_MS)
}
