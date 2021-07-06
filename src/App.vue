<template>
  <div>
    <div>Current Value {{ getCounter }}</div>
    <div id="navbar">
      <router-link to="/old-counter">Old Counter</router-link><br />
      <router-link to="/modern-counter">Modern Counter</router-link><br />
      <router-link to="/new-counter">To New Counter</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import { useStore } from 'vuex'

export default {
  name: 'App',
  data() {

    let store = useStore()

    let counter = store.getters.getValue

    return {
      store,
      counter
    }
  },
  computed: {
    getCounter() {
      return this.store.getters.getValue
    }
  }
}
</script>

<style>

html, body, #app {
  margin: 0;
  padding: 0;
}

</style>
