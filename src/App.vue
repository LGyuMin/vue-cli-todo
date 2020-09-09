<template>
  <!-- <div id="app">
    <Search></Search>
    <div id="wrapper">
      <Category></Category>
      <div id="right">
        <h2>My To-Do List</h2>
        <AddTodo></AddTodo>
        <TodoList></TodoList>
      </div>
    </div>
  </div> -->
  <div>
    <Child>
      <template #header>
        <h1>Here might be a page title</h1>
      </template>

      <template>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>
      
      <template #footer>
        <p>Here's some contact info</p>
      </template>
    </Child>
  </div>
</template>

<script>
// import Search from './components/Search.vue'
// import Category from './components/Category.vue'
// import AddTodo from './components/AddTodo.vue'
// import TodoList from './components/TodoList.vue'

// export default {
//   name: 'App',
//   components: {
//     Search, Category, AddTodo, TodoList
//   }
// }

import Child from './components/Child.vue'
export default {
  name: 'App',
  components: {
    Child
  },
  data:function(){
    
  }
}
</script>

<style>
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
