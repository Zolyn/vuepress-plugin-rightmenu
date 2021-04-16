<template>
    <v-app id="context-menu">
        <v-menu
            v-model="showMenu"
            transition="slide-x-transition"
            min-width="160px"
            offset-y
            absolute
            :position-x="xPos"
            :position-y="yPos"
            :close-on-click="clickListener"
            :close-on-content-click="clickListener"
        >
            <v-list>
                <v-list-item>
                    <v-row align="center" dense justify="center">
                        <v-col v-for="(item, index) in icons" :key="item.icon + index">
                            <v-hover v-slot="{ hover }">
                                <v-icon
                                    v-text="item.icon"
                                    :class="{ 'on-hover': hover }"
                                    @click="item.handler.call(that)"
                                ></v-icon>
                            </v-hover>
                        </v-col>
                    </v-row>
                </v-list-item>
                <v-divider></v-divider>
                <v-row dense align="start" justify="center">
                    <v-col>
                        <v-list-item @click="logItem(item.title)" v-for="(item, index) in items.current" :key="items.type + index">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-col>
                </v-row>
            </v-list>
        </v-menu>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            that: this,
            showMenu: false,
            xPos: 0,
            yPos: 0,
            items: {
                type: 'normal',
                normal: [{title: 'Test 1'}, {title: 'Test 2'}, {title: 'Test 3'}, {title: 'Test 4'}],
                text: [{title: 'Text 1'}, {title: 'Text 2'}, {title: 'Text 3'}, {title: 'Text 4'}],
                image: [{title: 'Img 1'}, {title: 'Img 2'}, {title: 'Img 3'}, {title: 'Img 4'}],
                current: this.normal
            },
            icons: [
                {
                    icon: 'mdi-arrow-left',
                    handler() {
                        this.$router.go(-1);
                    },
                },
                {
                    icon: 'mdi-refresh',
                    handler() {
                        window.location.reload();
                    },
                },
                {
                    icon: 'mdi-home',
                    handler() {
                        if (this.$route.path !== '/') {
                            this.$router.push('/');
                        }
                    },
                },
                {
                    icon: 'mdi-arrow-right',
                    handler() {
                        this.$router.go(1);
                    },
                },
            ],
            clickListener: false
        }
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
            let items = this.items;
            e.preventDefault();
            this.showMenu = false;
            this.xPos = e.clientX;
            this.yPos = e.clientY;
            if (e.target.innerText) {
                items.type = 'text';
                items.current = items.text;
            } else if (e.target.nodeName === 'IMG') {
                items.type = 'image';
                items.current = items.image;
            } else {
                items.type = 'normal';
                items.current = items.normal;
            }
            this.$nextTick(() => {
                this.showMenu = true;
            });
        },
        logItem(title) {
            alert(title);
        },
    },
};
</script>

<style lang="stylus">
#context-menu
    .v-application--wrap
        min-height 0
    .on-hover
        color: skyblue
        transition .3s
</style>
