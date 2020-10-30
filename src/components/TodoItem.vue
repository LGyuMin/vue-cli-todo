<template>
    <li class="item">
        <label :class="{ selected: todo.isDone }" :for="'input'+todo.id">
            <i :class="[todo.isDone ? ['fas', 'fa-check-circle'] : ['far', 'fa-circle'] ]"></i>
        </label>
        <input type="checkbox" :id="'input'+todo.id" @change="checkTodo(todo.id, 'isDone')">
        <p :class="{selected:todo.isDone}" v-show="!isEdited" @click="checkTodo(todo.id, 'isDone')">{{ todo.todo }}</p>
        <input type="text" ref="todo_input" v-show="isEdited" class="edit-input" :value="todo.todo" @keydown="editTodo">
        <div id="iconBox">
            <i class="fas fa-edit" :class="{selected:isEdited}" @mouseup="edit(isEdited)"></i>
            <i class="fas fa-trash-alt" @click="deleteTodo(todo.id)"></i>
            <i :class="[todo.importance ? ['fas', 'fa-star', 'selected'] : ['far', 'fa-star'] ]" @click="checkTodo(todo.id, 'importance')"></i>
        </div>
    </li>
</template>

<script>
// import eventBus from '../EventBus';

export default {
    name: 'TodoItem',
    props: ['todo'],
    data: function() {
        return {
            isEdited: false,
        }
    },
    methods: {
        edit(state) {
            this.isEdited = !state;

            if(this.$refs.todo_input.value.trim() == '') {
                alert('내용을 입력하세요.');
                this.isEdited = true;
                this.$refs.todo_input.focus(); 
                return;
            }

            if(this.isEdited) {
                setTimeout(() => {
                    this.$refs.todo_input.focus(); 
                }, 300)
            }
        },
        editTodo(event) {
            if(event.keyCode == 13) {
                this.edit(this.isEdited);
            }
            this.$store.commit('editTodo', {id: this.todo.id, todo: event.target.value});
        },
        checkTodo(id, category) {
            this.$store.commit('checkTodo', {
                id: id,
                category: category
            })
        },
        deleteTodo(id) {
            this.$store.commit('deleteTodo', id);
        },
    }
}
</script>

<style scoped>
li.item {
    padding: 20px 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #285943;
}

li.item:after {
    content: '';
    display: block;
    clear: both;
}

li.item>* {
    float: left;
    color: #285943;
}

li.item label {
    margin-right: 15px;
    color: #6E7783;
    cursor: pointer;
}

li.item label.selected,
li.item #iconBox i.selected { 
    color: #285943;
}

li.item p {
    cursor: pointer;
}

li.item input[type="checkbox"] {
    display: none;
}

li.item input[type="text"] {
    background: none;
    font-size: 16px;
    color: #000;
    margin-top: 1px;
    width: calc(100% - 110px);
}

li.item #iconBox {
    float: right;
}

li.item #iconBox i {
    margin-left: 5px;
    cursor: pointer;
    color: #6E7783;
}

li.item #iconBox i:hover,
li.item label:hover {
    color: #285943;
}

li.item p.selected {
    text-decoration: line-through;
}
</style>