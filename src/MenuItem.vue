<template>
    <v-app id="context-menu-item">
        <div v-for="(item, index) in list" :key="name + index" class="pure-g justify-start align-center">
            <div class="pure-u-1-1">
                <v-hover v-slot="{ hover }">
                    <v-list-item :dense="dense" @click="item.handler.call(parent)">
                        <v-icon
                            v-if="item.icon"
                            :class="{ 'on-hover': hover, 'pure-gutter': true }"
                            v-text="item.icon"
                        ></v-icon>
                        <v-list-item-title :class="{ 'on-hover': hover, 'pure-gutter': true }">
                            {{ item.title }}
                        </v-list-item-title>
                    </v-list-item>
                </v-hover>
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
