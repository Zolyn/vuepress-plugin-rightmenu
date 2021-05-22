<template>
    <v-app id="context-menu">
        <v-menu
            v-model="showMenu"
            rounded="lg"
            transition="slide-x-transition"
            min-width="160px"
            offset-y
            absolute
            :position-x="xPos"
            :position-y="yPos"
            :close-on-click="clickListener"
            :close-on-content-click="clickListener"
        >
            <v-list :dense="dense">
                <v-list-item :dense="dense">
                    <div class="pure-g justify-center align-center">
                        <div
                            v-for="(item, index) in iconBar"
                            :key="item.icon + index"
                            :class="`pure-u-1-${iconBar.length}`"
                        >
                            <v-hover v-slot="{ hover }" class="pure-gutter">
                                <v-list-item-icon>
                                    <v-icon
                                        :class="{ 'on-hover': hover }"
                                        @click="item.handler.call(that)"
                                        v-text="item.icon"
                                    ></v-icon>
                                </v-list-item-icon>
                            </v-hover>
                        </div>
                    </div>
                </v-list-item>
                <v-divider></v-divider>
                <menu-item :parent="that" :list="itemList" name="itemList" :dense="dense"></menu-item>
                <v-divider></v-divider>
                <menu-item :parent="that" :list="stickyActions" name="sticky" :dense="dense"></menu-item>
            </v-list>
        </v-menu>
        <input id="clipboard-container" readonly :value="clipboard" />
    </v-app>
</template>

<script>
let config = '';

try {
    config = require(ZOLYN_RIGHTMENU_CONFIG);
} catch (e) {
    console.log('Cannot read custom configuration file. Using default configuration...');
}

import MenuItem from './MenuItem';

export default {
    components: {
        MenuItem,
    },
    data() {
        return {
            that: this,
            showMenu: false,
            xPos: 0,
            yPos: 0,
            clickListener: false,
            currentLink: '',
            currentImage: '',
            clipboard: '',
            itemList: [],
            // 插件配置
            dense: config.dense,
            iconBar: config.iconBar || [
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
            eventActions: config.eventActions || {
                link: [
                    {
                        title: 'Open in new tab',
                        handler() {
                            window.open(this.currentLink);
                        },
                    },
                    {
                        title: 'Copy link',
                        handler() {
                            this.clipboard = this.currentLink;
                            this.$nextTick(() => {
                                this.copy();
                            });
                        },
                    },
                ],
                image: [
                    {
                        title: 'Open image in new tab',
                        handler() {
                            window.open(this.currentImage);
                        },
                    },
                    {
                        title: 'Copy image URL',
                        handler() {
                            this.clipboard = this.currentImage;
                            this.$nextTick(() => {
                                this.copy();
                            });
                        },
                    },
                ],
            },
            normalActions: config.normalActions || [
                {
                    title: 'Default 1',
                },
                {
                    title: 'Default 2',
                },
                {
                    title: 'Default 3',
                },
                {
                    title: 'Default 4',
                },
            ],
            stickyActions: config.stickyActions || [
                {
                    title: 'Switch mode',
                    handler() {
                        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
                        if (this.$vuetify.theme.dark) {
                            document.body.setAttribute('data-theme', 'dark');
                            localStorage.setItem('mode', 'dark');
                        } else {
                            document.body.setAttribute('data-theme', 'light');
                            localStorage.setItem('mode', 'light');
                        }
                    },
                },
            ],
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
            this.getItemList(e);
            this.$nextTick(() => {
                this.showMenu = true;
            });
        },
        getItemList(e) {
            const items = [];
            const elements = e.path;
            const imgPlans = [
                {
                    fn() {
                        return elements[0].currentSrc;
                    },
                },
                {
                    fn() {
                        if (elements[0].children.length) {
                            return elements[0].children[0].currentSrc;
                        }
                    },
                },
                {
                    fn() {
                        let img = '';
                        for (let i = 0; i < 3; i += 1) {
                            img = elements[i].style['background-image'].split('"')[1];
                            if (img) {
                                break;
                            }
                        }
                        return img;
                    },
                },
            ];
            for (const val of imgPlans) {
                const result = val.fn();
                if (result) {
                    this.currentImage = result;
                    items.push(...this.eventActions.image);
                    break;
                }
            }
            for (let i = 0; i < 5; i += 1) {
                const link = elements[i].href;
                if (link) {
                    this.currentLink = link;
                    items.push(...this.eventActions.link);
                    break;
                }
            }
            if (!items.length) {
                items.push(...this.normalActions);
            }
            this.itemList = items;
        },
        copy() {
            const container = document.querySelector('#clipboard-container');
            container.select();
            document.execCommand('copy');
        },
    },
};
</script>

<style lang="stylus">
@import "https://unpkg.com/purecss@2.0.6/build/base-min.css"
@import "https://unpkg.com/purecss@2.0.6/build/grids-min.css"
@import "https://unpkg.com/purecss@2.0.6/build/grids-responsive-min.css"

#context-menu
    .v-application--wrap
        min-height 0
    .on-hover
        color: skyblue !important
        transition .3s
    .theme--dark.v-list
        background #282828
    .theme--dark.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled)
        color #b4b4b4 !important
    .theme--dark.v-icon
        color #b4b4b4
    #clipboard-container
        height 0
    .pure-gutter
        padding 4px
    .pure-g
        width 100%

#context-menu-item.theme--dark.v-application
    background #282828
</style>
