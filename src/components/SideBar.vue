<template>
    <div id="category">
        <ul>
            <li :class="{selected:selection.all}" @click="selecteCategory('all')"><i class="fas fa-table"></i>모두 보기</li>
            <li :class="{selected:selection.todo}" @click="selecteCategory('todo')"><i class="fas fa-list-ul"></i>할 일</li>
            <li :class="{selected:selection.isDone}" @click="selecteCategory('isDone')"><i class="fas fa-check"></i>완료</li>
            <li :class="{selected:selection.importance}" @click="selecteCategory('importance')"><i class="far fa-star"></i>중요</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Category',
    data:function(){
        return {
            selection: {all: true, todo: false, isDone: false, importance: false},
            option: {category: 'all', value: true}
        }
    },
    methods: {
        selecteCategory(category) {
            // selected class 추가/삭제
            for(let i in this.selection){
                this.selection[i]=false;
            }
            this.selection[category]=true;

            // searchOption 설정
            this.option.category = category == 'todo' ? 'isDone' : category;
            this.option.value = category == 'todo' ? false : true;

            this.$store.commit('setSearchOption', this.option);
        },
    }
}
</script>


<style scoped>
#category {
    min-width: 50px;
    max-width: 300px;
    flex: 1 1 20%;
    background: #9DC3C1;
    border-right: 1px solid #D4DFE6;
}

#category ul {
    width: 100%;
}

#category ul li {
    width: 100%;
    line-height: 50px;
    padding: 0 15px;
    box-sizing: border-box;
    cursor: pointer;
    color: #285943;
}

#category ul li.selected {
    background: #D4DFE6;
    color: #000;
}

#category ul li.selected:hover {
    background: #D4DFE6;
}

#category ul li:hover {
    background: #ABD0CE;
}

#category ul li i {
    margin-right: 20px;
}
</style>