<template>
    <v-app id="context-menu-item">
        <div v-for="(item, index) in list" :key="name + index" class="pure-g justify-start align-center">
            <div class="pure-u-1-1">
                <v-list-item :dense="dense" @click="item.handler.call(parent)">
                    <v-list-item-icon v-if="item.icon">
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{ item.title }}
                        </v-list-item-title>
                    </v-list-item-content>
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
        dense: {
            type: Boolean,
        },
    },
};
</script>

<style scoped></style>
