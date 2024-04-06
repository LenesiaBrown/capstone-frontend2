<template>
  <div id="app">
    <Header />
    <HomeView />
    <!-- <router-view />  -->
  </div>
</template>

<script>
import Header from './components/HeaderTop.vue';
import HomeView from './views/HomeView.vue';
// import Home from './views/HomeView.vue';

export default {
  name: 'App',
  components: {
    Header,
    HomeView
  },
};
</script>

<style>
/* Add global styles here */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>











<!-- <template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style> -->
