<template>
    <textarea class="textarea" :value="value" :id="id" cols="30" rows="10"></textarea>
</template>

<script>
export default {
    props: {
        value: {
            type: String
        },
        id: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
.textarea{
    padding: .375rem .75rem;
}
</style>