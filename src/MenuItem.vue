<template>
    <v-app id="context-menu-item">
        <v-list-item v-for="(item, index) in list" :key="name + index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
    </v-app>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>

</style>