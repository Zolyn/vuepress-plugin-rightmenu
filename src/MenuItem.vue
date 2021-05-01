<template>
    <!-- TODO: Refactor components -->
    <v-app id="context-menu-item">
        <div v-for="(item, index) in list" :key="name + index" class="pure-g justify-start align-center">
            <div class="pure-u-1-1">
                <v-list-item @click="item.handler.call(parent)">
                    <v-list-item-title>
                        {{ item.title }}
                    </v-list-item-title>
                </v-list-item>
            </div>
        </div>
    </v-app>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        parent: {
            required: true,
        },
    },
};
</script>

<style scoped></style>
