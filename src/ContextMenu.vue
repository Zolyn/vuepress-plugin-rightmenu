<template>
    <v-app>
        <v-menu
            v-model="showMenu"
            transition="slide-x-transition"
            absolute
            :position-x="xPos"
            :position-y="yPos"
            close-on-click
            close-on-content-click
        >
            <v-list>
                <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                >
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
            items: [
                { title: 'Test 1' },
                { title: 'Test 2' },
                { title: 'Test 3' },
                { title: 'Test 4' },
            ],
        }
    },
    mounted() {
        window.addEventListener('contextmenu', (e) => {
            this.handleClick(e);
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
        }
    }
}
</script>

<style scoped>
</style>