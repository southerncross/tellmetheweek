<template>
  <div class="home">
    <date-axis
      :curr-week-monday="currWeekMonday"
      :curr-week-monday-change="currWeekMondayChange"
    />
    <info-panel
      :curr-week-monday="currWeekMonday"
    />
  </div>
</template>

<script>
import { DAY_MS } from '../constants'
import { msToWeekCnt } from '../utils'

import DateAxis from './DateAxis'
import InfoPanel from './InfoPanel'

export default {
  name: 'Home',

  components: {
    DateAxis,
    InfoPanel
  },

  data() {
    const date = new Date()
    const day = date.getDay()
    const currWeekMonday = new Date(date.getTime() - ((day + 6) % 7 + 1) * DAY_MS)
    return {
      currWeekMonday
    }
  },

  methods: {
    currWeekMondayChange(monday) {
      const weekDiff = msToWeekCnt(Math.abs(monday.getTime() - this.currWeekMonday.getTime()))
      if (weekDiff > 0 && weekDiff <= 2) {
        this.currWeekMonday = monday
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
  margin-top 20%
</style>
