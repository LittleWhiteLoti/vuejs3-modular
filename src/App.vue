<template>
  <div>
    <div>Current Value {{ getValue }}</div>
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

export default {
  name: 'App'
}
</script>

<style>

html, body, #app {
  margin: 0;
  padding: 0;
}

</style>
