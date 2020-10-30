import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList : [
      {id: 1, todo: "밥 먹기", isDone: false, importance: false},
      {id: 2, todo: "집 가기", isDone: false, importance: false},
      {id: 3, todo: "영화 보기", isDone: false, importance: false},
      {id: 4, todo: "집에 빨리 가기", isDone: false, importance: false},
      {id: 5, todo: "아무 것도 안하기", isDone: false, importance: false},
    ],
    searchOption: {keyword: '', category: 'all', value: true}
  },
  mutations: {
    checkTodo(state, payload) {
      state.todoList.forEach((item) => {
        if(item.id == payload.id) item[payload.category] = !item[payload.category];
      });
    },
    deleteTodo(state, id) {
      state.todoList = state.todoList.filter((item) => {
        return item.id != id;
      });
    },
    addTodo(state, payload) {
      if(!payload.todo) return;
      let id = state.todoList.length + 1;
      state.todoList.unshift({
        id: id,
        todo: payload.todo,
        isDone: false,
        importance: false
      })
    },
    editTodo(state, payload) {
      state.todoList.forEach((item) => {
        if(item.id == payload.id) {
          item.todo = payload.todo;
        }
      });
    },
    setKeyword(state, payload) {
      state.searchOption.keyword = payload.keyword;
    },
    setSearchOption(state, payload) {
      state.searchOption.keyword = !payload.keyword ? '' : payload.keyword;
      state.searchOption.category = payload.category == undefined ? state.searchOption.category : payload.category;
      state.searchOption.value = payload.value == undefined ? state.searchOption.value : payload.value;
    }
  },
  getters: {
    filteredTodoList(state) {
      let keyword = state.searchOption.keyword,
          category = state.searchOption.category,
          value = state.searchOption.value,
          filteredList = [];
          
      if(category == 'all') {
        filteredList = state.todoList;
      } else { 
        filteredList = state.todoList.filter((item) => {
          return item[category] == value;
        })
      }

      if(keyword != '') filteredList = filteredList.filter((item) => {
        return item.todo.includes(keyword);
      })

      return filteredList;
    }
  }
})
