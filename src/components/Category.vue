<template>
    <div id="category">
        <ul>
            <li :class="{selected:selection.all}" @click="filter('all')"><i class="fas fa-table"></i>모두 보기</li>
            <li :class="{selected:selection.todo}" @click="filter('todo')"><i class="fas fa-list-ul"></i>할 일</li>
            <li :class="{selected:selection.isDone}" @click="filter('isDone')"><i class="fas fa-check"></i>완료</li>
            <li :class="{selected:selection.importance}" @click="filter('importance')"><i class="far fa-star"></i>중요</li>
        </ul>
    </div>
</template>

<script>
import eventBus from '../EventBus';

export default {
    name: 'Category',
    data:function(){
        return {
            selection: {all: true, todo: false, isDone: false, importance: false},
            option: {category: 'all', value: true}
        }
    },
    methods: {
        filter(o) {
            //selected class 추가/삭제 이벤트
            for(let i in this.selection){
                this.selection[i]=false;
            }
            this.selection[o]=true;
            
            //filter 이벤트 등록
            if(o == 'todo'){
                this.option.category = 'isDone';
                this.option.value = false;
            } else {
                this.option.category = o;
                this.option.value = true;
            }
            eventBus.$emit('filtering', '', this.option);
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