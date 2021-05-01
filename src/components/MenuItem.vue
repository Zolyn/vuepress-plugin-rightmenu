<template>
    <!-- TODO: Refactor components -->
    <v-app id="context-menu-item">
        <div class="pure-g justify-center align-start">
            <div v-for="(item, index) in list" :key="name + index" class="pure-u" @click="item.handler.call(parent)">
                <v-list-item>
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
