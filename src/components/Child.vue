<template>
<div class="container">
    <header>
        <slot name="header"></slot>
    </header>
    <main>
        <slot></slot>
    </main>
    <footer>
        <slot name="footer"></slot>
    </footer>
    </div>  
</template>

<script>
export default {
    name:'child',
    props:['headerText', 'footerText']    
}
</script>

<style scoped>
.container{
    width: 1500px;
    margin: 0 auto;
}

header{
    width: 100%;
    height: 100px;
    border: 1px solid red;  
}

main{
    width: 100%;
    height: 500px;
    border:1px solid green;
}

footer{
    width: 100%;
    height: 80px;
    border: 1px solid blue;  
}
</style>