<template>
    <component :is="menuComponent" v-if="menuComponent"></component>
</template>

<script>
export default {
    data() {
        return {
            menuComponent: null,
        };
    },
    mounted() {
        import('./menus/KeenUI').then((module) => {
            this.menuComponent = module.default;
        });
    },
};
</script>

<style scoped></style>
