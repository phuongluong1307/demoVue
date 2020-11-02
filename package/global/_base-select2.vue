<template>
    <Select2 
        :options="options" :settings="settings" 
        @change="$emit('change', $event)" 
        @select="$emit('select', $event)" 
    />
</template>

<script>
import Select2 from 'v-select2-component';
export default {
    model: {
        event: 'change',
        event: 'select'
    },
    props: {
        options: {
            type: Array,
            default: []
        },
        settings: {
            type: Object,
            default: {}
        }
    },
    components: {
        Select2
    },
}
</script>

<style>
.select2-container{
    width:100%!important;
}
</style>