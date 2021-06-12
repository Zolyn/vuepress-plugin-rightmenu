<template>
    <v-app id="contextmenu-iconbar">
        <v-list-item :dense="dense">
            <div class="pure-g justify-center align-center">
                <div
                    v-for="(item, index) in list"
                    :key="name + index"
                    :class="`pure-u-1-${list.length}`"
                >
                    <v-hover v-slot="{ hover }" class="pure-gutter">
                        <v-icon
                            :dense="dense"
                            :class="{ 'on-hover': hover }"
                            @click="item.handler.call(parent)"
                            v-text="item.icon"
                        ></v-icon>
                    </v-hover>
                </div>
            </div>
        </v-list-item>
    </v-app>
</template>

<script>
export { default } from './Iconbar';
</script>

<style scoped>

</style>