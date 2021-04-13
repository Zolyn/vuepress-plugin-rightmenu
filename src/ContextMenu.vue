<template>
    <v-app id="context-menu">
        <v-menu
            v-model="showMenu"
            transition="slide-x-transition"
            offset-y
            absolute
            :position-x="xPos"
            :position-y="yPos"
            :close-on-click="closeOnClick"
            :close-on-content-click="closeOnContentClick"
        >
            <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            showMenu: false,
            xPos: 0,
            yPos: 0,
            items: [{ title: 'Test 1' }, { title: 'Test 2' }, { title: 'Test 3' }, { title: 'Test 4' }],
            closeOnClick: false,
            closeOnContentClick: false,
        };
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('contextmenu', (e) => {
                this.handleClick(e);
            });
            window.addEventListener('click', () => {
                if (this.showMenu) {
                    this.showMenu = false;
                }
            });
            console.log(`DEBUG: Initialized. [${Math.floor(Math.random() * 100)}]`);
        });
    },
    methods: {
        handleClick(e) {
            e.preventDefault();
            this.showMenu = false;
            this.xPos = e.clientX;
            this.yPos = e.clientY;
            this.$nextTick(() => {
                this.showMenu = true;
            });
        },
    },
};
</script>

<style lang="stylus">
#context-menu
    .v-application--wrap
        min-height 0
</style>
