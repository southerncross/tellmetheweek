<template>
  <div id="app">
    <home/>
  </div>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'app',

  components: {
    Home
  }
}
</script>

<style lang="stylus">

body
  font-size 16px

*
*:before
*:after
  box-sizing border-box

#app
  font-family 'Helvetica Neue', Arial, 'Open Sans', 'Hiragino Sans GB', -apple-system, 'Lantinghei SC', 'Microsoft Yahei', sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
</style>
