<template>
<div class="info-panel">
  <div class="info-item">
    <span>本周</span>
    <span>{{type}}({{rest}})</span>
  </div>
  <div class="info-item">
    <span>oncall</span>
    <span>{{oncaller}}</span>
  </div>
</div>
</template>

<script>
import { msToWeekCnt } from '../utils'
import { ONCALLERS } from '../constants'

export default {
  name: 'InfoPanel',

  props: {
    currWeekMonday: {
      type: Date,
      required: true
    }
  },

  computed: {
    type() {
      return ['大周', '小周'][msToWeekCnt(this.currWeekMonday.getTime()) % 2]
    },
    rest() {
      return ['双休', '单休'][msToWeekCnt(this.currWeekMonday.getTime()) % 2]
    },
    oncaller() {
      return ONCALLERS[msToWeekCnt(this.currWeekMonday.getTime()) % ONCALLERS.length]
    }
  }
}
</script>

<style lang="stylus" scoped>
.info-panel
  margin-top 10%
  text-align center

.info-item span
  display inline-block
  vertical-align top
  margin-top 10px
  font-size 1.2rem
  line-height 1.5
  &:first-child
    width 4em
    padding-right 10px
    text-align right
  &:last-child
    width 5em
    text-align left
</style>
