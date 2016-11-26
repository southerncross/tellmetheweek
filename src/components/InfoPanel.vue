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
export default {
  name: 'InfoPanel',

  props: {
    currWeekStart: {
      type: Object,
      required: true
    }
  },

  computed: {
    type() {
      return ['大周', '小周'][this.currWeekStart.week() % 2]
    },
    rest() {
      return ['双休', '单休'][this.currWeekStart.week() % 2]
    },
    oncaller() {
      return ['郭麟', '李国兴', '李舜阳', '王思航', '谢昊', '陈奕钧', '吴欣剑'][this.currWeekStart.week() % 7]
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
