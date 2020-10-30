<template>
  <div id="listBox">
    <ul id="todo-List">
      <todo-item
        v-for="todo in filteredTodoList"
        :key="todo.id"
        :todo="todo"
      ></todo-item>
    </ul>
  </div>
</template>

<script>
// import eventBus from "../EventBus";
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  components: { TodoItem },
  computed: {
    todoList() {
      return this.$store.state.todoList;
    },
    filteredTodoList() {
      return this.$store.getters.filteredTodoList;
    }
    // filteredList: function() {
    //   let option = this.option;
    //   let keyword = this.keyword;
    //   if (keyword == "") {
    //     return this.changeList(option, this.todoList);
    //   } else {
    //     // var temp = this.todoList.filter(function(item) {
    //     //   if (item.todo.indexOf(keyword) > -1) {
    //     //     return true;
    //     //   }
    //     // });
    //     return this.changeList(option, this.todoList.filter((item) => {
    //       return item.todo.includes(keyword);
    //     }));
    //   }
    // }
  },
  methods: {

  }
};
</script>

<style scoped>
.item > * {
  float: left;
  color: #285943;
}

.item li label {
  margin-right: 15px;
  color: #6e7783;
  cursor: pointer;
}

.item li label.selected,
.item #iconBox i.selected {
  color: #285943;
}

.item p {
  cursor: pointer;
}

.item input[type="checkbox"] {
  display: none;
}

.item input[type="text"] {
  background: none;
  font-size: 16px;
  color: #000;
  margin-top: 1px;
  width: calc(100% - 110px);
}

.item #iconBox {
  float: right;
}

.item #iconBox i {
  margin-left: 5px;
  cursor: pointer;
  color: #6e7783;
}

.item #iconBox i:hover,
.item label:hover {
  color: #285943;
}

.item p.selected {
  text-decoration: line-through;
}
</style>