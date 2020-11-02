<template>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" :data-target="'#' + id">
        {{ nameButton }}
    </button>
</template>

<script>
export default {
    props: {
        nameButton: String,
        id: {
            type: String,
            default: 'myModal'
        }
    }
}
</script>

<style>

</style>