<template>
    <button v-on="$listeners" class="button">
        <slot />
    </button>
</template>

<script>
export default {
    props: {
        
    }
}
</script>

<style scoped>
.button{
    padding:5px 10px;
    cursor:pointer;
    color:#FFFFFF;
    border:none;
    background: #39a275;
    border-radius:4px;
}
.button:disabled{
    cursor:not-allowed;
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
}
</style>