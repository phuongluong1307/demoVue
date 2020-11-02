<template>
    <div class="warehouse">
        <VDashboard>
            <BaseButton @click.stop.prevent="handleClick">Click</BaseButton>
            <BaseButtonPopup :nameButton="'click me'"></BaseButtonPopup>
        </VDashboard>
    </div>
</template>

<script>
export default {
    methods: {
        handleClick(){
            window.location.href = '/';
        }
    }
}
</script>

<style>

</style>