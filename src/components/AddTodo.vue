<template>
    <div id="inputBox">
        <label for="todo-input"><i class="fas fa-plus"></i></label>
        <input type="text" 
            name="todo-input" 
            id="todo-input" 
            placeholder="할 일 입력 후 엔터를 눌러 추가"
            @keyup.enter="addTodo"
            >
    </div>
</template>

<script>
export default {
    name: 'AddTodo',
    methods: {
        addTodo: function(event) {
            this.$store.commit('addTodo', {todo: event.target.value.trim()});
            event.target.value = '';
        }
    }
}
</script>

<style scoped>
#right #inputBox {
    padding-bottom: 10px;
    border-bottom: 2px solid #285943;
}

#right #inputBox label {
    display: inline-block;
    width: 30px;
    cursor: pointer;
    color: #285943;

}

#right #inputBox label i {
    margin-left: 10px;
}

#right #inputBox input {
    width: calc(100% - 45px);
    font-size: 18px;
    line-height: 30px;
    padding: 5px;
    background: none;
    color: #285943;
}
</style>

