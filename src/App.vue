<template>
  <div id="app">
    <TransitionList />
  </div>
</template>

<script>
import TransitionList from '@/components/TransitionList.vue';

export default {
  name: 'App',
  components: {
    TransitionList
  }
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
