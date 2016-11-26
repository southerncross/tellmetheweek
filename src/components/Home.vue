<template>
  <div class="home">
    <date-axis
      :curr-week-start="currWeekStart"
      :curr-week-start-change="currWeekStartChange"
    />
    <info-panel
      :curr-week-start="currWeekStart"
    />
  </div>
</template>

<script>
import moment from 'moment'

import DateAxis from './DateAxis'
import InfoPanel from './InfoPanel'

export default {
  name: 'Home',

  components: {
    DateAxis,
    InfoPanel
  },

  data() {
    return {
      currWeekStart: moment().startOf('week')
    }
  },

  methods: {
    currWeekStartChange(weekStart) {
      const diff = Math.abs(weekStart.diff(this.currWeekStart, 'weeks'))
      if (diff > 0 && diff <= 2) {
        this.currWeekStart = weekStart
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
  margin-top 20%
</style>
