<template>
<div class="date-axis">
  <transition-group name="fade" tag="ul" class="week-container">
    <div class="week-overlay" key="overlay"></div>
    <li
      v-for="week in weeks"
      class="week-item"
      :key="`${week.start.getDate()}-${week.end.getDate()}`"
      @click="currWeekMondayChange(week.start)"
      :style="{ cursor: week.clickable ? 'pointer' : 'initial' }"
    >
      <div class="date">
        <div class="month">{{week.start.getMonth() + 1}}月</div>
        <div class="day">{{week.start.getDate() + 1}}日</div>
      </div>
      ~
      <div class="date">
        <div class="month">{{week.end.getMonth() + 1}}月</div>
        <div class="day">{{week.end.getDate() + 1}}日</div>
      </div>
    </li>
  </transition-group>
</div>
</template>

<script>
import { WEEK_MS, DAY_MS } from '../constants'

export default {
  name: 'DateAxis',

  props: {
    currWeekMonday: {
      type: Date,
      required: true
    },
    currWeekMondayChange: {
      type: Function,
      required: true
    }
  },

  computed: {
    weeks() {
      const res = []
      for (let i = -4; i <= 4; i++) {
        res.push({
          start: new Date(this.currWeekMonday.getTime() + i * WEEK_MS),
          end: new Date(this.currWeekMonday.getTime() + (i * 7 + 6) * DAY_MS),
          clickable: Math.abs(i) <= 2
        })
      }
      return res
    }
  }
}
</script>

<style lang="stylus" scoped>

week-width = 150px
week-height = 100px
cursor-size = 10px

.date
  display inline-block
  vertical-align middle
  .month
    font-size 1.8rem
    line-height 1
    &:after
      content ''
      display block
      height 1px
      width 100%
      background-color gray
  .day
    font-size 1rem
    line-height 1

.date-axis
  width 5 * week-width
  margin 0 auto
  overflow hidden

.week-container
  position relative
  width week-width * 9
  height week-height + cursor-size * 2
  padding cursor-size 0
  margin 0
  margin-left week-width * -((9 - 5) / 2)
  overflow hidden
  &:before
  &:after
    content ''
    position absolute
    left 50%
    display block
    height 0
    width 0
    margin-left -(cursor-size / 2)
    border 5px solid transparent
  &:before
    margin-top -(cursor-size)
    border-top-color black
  &:after
    border-bottom-color black

.week-overlay
  position absolute
  z-index 1
  width 100%
  height 100%
  background-image linear-gradient(90deg, white week-width * 2, transparent week-width * 4, white week-width * 7)
  pointer-events none

.week-item
  display inline-block
  vertical-align top
  height week-height
  width week-width
  text-align center
  line-height week-height
  border 1px solid black
  border-left 0
  user-select none

.fade-move
  transition all .5s

.fade-leave
.fade-leave-active
  position absolute
</style>