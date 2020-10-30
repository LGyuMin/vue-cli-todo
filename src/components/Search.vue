<template>
    <div id="header">
        <h1>To Do  List</h1>
        <input type="text" 
        @keyup.enter="searchTodo" 
        placeholder="검색어 입력 후 엔터">
    </div>
</template>

<script lang="ts">
// import eventBus from '../EventBus';

export default {
    name: 'Search',
    methods: {
        searchTodo(event) {
            let keyword = event.target.value;
            if(keyword.trim()) {
                this.$store.commit('setSearchOption', {keyword: keyword.trim()})
                event.target.value = '';
            }
        }
    }
}
</script>

<style scoped>
#header {
    width: 100%;
    height: 50px;
    padding: 5px 10px;
    background: #77AAAD;
    box-sizing: border-box;
}

#header h1 {
    line-height: 45px;
    color: #D8E6E7;
    font-family: 'Handlee', cursive;
    float: left;
}

#header input {
    float: right;
    width: 250px;
    font-size: 16px;
    font-weight: 400;
    padding: 6px 3px 6px 25px;
    margin-top: 4px;
    margin-right: 50%;
    transform: translateX(50%);
    border-radius: 20px;
    border: 1px solid #D8E6E7;
    background-image: url("../assets/search_icon01.png");
    background-size: 16px;
    background-repeat: no-repeat;
    background-color: #D8E6E7;
    background-position: 5px 7px;
}

#header input:focus {
    outline: none;
    background: #fff;
    background-image: url("../assets/search_icon02.png");
    background-size: 16px;
    background-repeat: no-repeat;
    background-position: 5px 7px;
}
</style>