<template>
  <div id="listBox">
    <ul id="todo-List">
      <todo-item
        v-for="todo in filteredList"
        :key="todo.id"
        :todo="todo"
        @delete-todo="deleteList"
        @check-todo="checkList"
      ></todo-item>
    </ul>
  </div>
</template>

<script>
import eventBus from "../EventBus";
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  components: { TodoItem },
  created() {
    eventBus.$on("add-todo", this.addList);
    eventBus.$on("filtering", this.filtering);
  },
  data: function() {
    return {
      todoList: [
        { id: 4, todo: "잠 자기", isDone: false, importance: false },
        { id: 3, todo: "집 가기", isDone: false, importance: false },
        { id: 2, todo: "영화 보기", isDone: false, importance: false },
        { id: 1, todo: "아무 것도 안하기", isDone: false, importance: false }
      ],
      keyword: "",
      option: { category: "all", value: true }
    };
  },
  computed: {
    filteredList: function() {
      var o = this.option;
      var k = this.keyword;
      if (k == "") {
        return this.changeList(o, this.todolist);
      } else {
        var temp = this.todolist.filter(function(item) {
          if (item.todo.indexOf(k) > -1) {
            return true;
          }
        });
        return this.changeList(o, temp);
      }
    }
  },
  methods: {
    checkList(id, p) {
      this.todolist.forEach(function(todo) {
        if (todo.id == id) {
          if (!todo[p]) todo[p] = true;
          else todo[p] = false;
        }
      });
    },
    deleteList(id) {
      var index = this.todolist.findIndex(function(item) {
        return item.id === id;
      });
      this.todolist.splice(index, 1);
    },
    addList(todo) {
      if (todo !== "") {
        var index = this.todolist.length + 1;
        this.todolist.unshift({
          id: index,
          todo: todo,
          isDone: false,
          importance: false
        });
      }
    },
    filtering(k, o) {
      this.keyword = k;
      if (o != undefined) {
        this.option = o;
      } else {
        o = this.option;
      }
    },
    changeList(o, arr) {
      var category = o.category;
      var value = o.value;
      if (category == "all") {
        return arr;
      } else {
        return arr.filter(function(item) {
          if (item[category] == value) {
            return true;
          }
        });
      }
    }
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