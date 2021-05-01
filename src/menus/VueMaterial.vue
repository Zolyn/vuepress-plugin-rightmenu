<template>
    <md-menu :md-active="showMenu" :md-offset-x="xPos" :md-offset-y="yPos" md-close-on-click>
        <md-menu-content class="md-layout md-gutter md-alignment-center-center">
            <md-menu-item class="md-layout-item">
                <md-button v-for="(item, index) in iconBar" :key="item.icon + index" class="md-icon-button">
                    <md-icon :class="item.icon"></md-icon>
                </md-button>
            </md-menu-item>
            <md-menu-item v-for="(item, index) in normalActions" :key="'normal' + index" class="md-layout-item">
                {{ item.title }}
            </md-menu-item>
        </md-menu-content>
    </md-menu>
</template>

<script>
export default {
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
            iconBar: [
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
            // eventActions: {
            //     link: [
            //         {
            //             title: 'Open in new tab',
            //             handler() {
            //                 window.open(this.currentLink);
            //             },
            //         },
            //         {
            //             title: 'Copy link',
            //             handler() {
            //                 this.clipboard = this.currentLink;
            //                 this.$nextTick(() => {
            //                     this.copy();
            //                 });
            //             },
            //         },
            //     ],
            //     image: [
            //         {
            //             title: 'Open image in new tab',
            //             handler() {
            //                 window.open(this.currentImage);
            //             },
            //         },
            //         {
            //             title: 'Copy image URL',
            //             handler() {
            //                 this.clipboard = this.currentImage;
            //                 this.$nextTick(() => {
            //                     this.copy();
            //                 });
            //             },
            //         },
            //     ],
            // },
            normalActions: [
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
            // stickyActions: [
            //     {
            //         title: 'Switch mode',
            //         handler() {
            //             this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            //             if (this.$vuetify.theme.dark) {
            //                 document.body.setAttribute('data-theme', 'dark');
            //                 localStorage.setItem('mode', 'dark');
            //             } else {
            //                 document.body.setAttribute('data-theme', 'light');
            //                 localStorage.setItem('mode', 'light');
            //             }
            //         },
            //     },
            // ],
        };
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('contextmenu', (e) => {
                this.handleRightClick(e);
            });
        });
    },
    methods: {
        handleRightClick(e) {
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

<style scoped></style>
