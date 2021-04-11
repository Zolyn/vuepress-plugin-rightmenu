<template>
    <v-menu
     v-model="showMenu"
     transition="slide-y-transition"
     absolute
     :position-x="xPos"
     :position-y="yPos"
    >
        <v-list>
            <v-list-item>
                <v-list-item-content>
                    <i class="mdi-refresh"></i>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
export default {
    data() {
        return {
            showMenu: false,
            xPos: 0,
            yPos: 0
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
@import './style/materialdesignicons.min.css';
</style>