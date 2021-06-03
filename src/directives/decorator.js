import { Component } from 'vue-property-decorator'

Component.registerHooks([
  'beforeCreate',
  'created',
  'mounted',
  'beforeDestroy',
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate'
])
