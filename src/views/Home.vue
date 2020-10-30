<template>
  <div class="home">
    <Search></Search>
    <div id="wrapper">
      <SideBar></SideBar>
      <div id="right">
        <h2>My To-Do List</h2>
        <AddTodo></AddTodo>
        <TodoList></TodoList>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import Search from '@/components/Search.vue'
import SideBar from '@/components/SideBar.vue'
import AddTodo from '@/components/AddTodo.vue'
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'Home',
  components: {
    Search, SideBar, AddTodo, TodoList
  }
}
</script>

<style scoped>
#wrapper {
    width: 100%;
    display: flex;
}

#wrapper::after {
    content: '';
    display: block;
    clear: both;
}

#wrapper>div {
    height: calc(100vh - 50px);
}

#wrapper #right {
    flex: 4 1 80%;
    background: #D8E6E7;
    padding: 30px 20px 0;
    box-sizing: border-box;
    overflow-y: auto;
}

#wrapper #right h2 {
    font-family: 'Handlee', cursive;
    color: #285943;
    margin-bottom: 20px;
}
</style>