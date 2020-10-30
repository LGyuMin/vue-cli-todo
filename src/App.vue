<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/todolist">Todo List</router-link>
    </div>
    <router-view/> -->
    <Home></Home>
  </div>
</template>

<script>
import Home from '@/views/Home.vue';

export default {
  name: 'App',
  components: { Home }
}

</script>

<style>
body {font-family: 'Nanum Gothic', sans-serif;}
* {margin: 0; padding: 0;}
a {color: #000; text-decoration: none;}
ul, ol {list-style: none;}
input[type="text"] {border: none;}
input[type="text"]:focus {outline: none;}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
