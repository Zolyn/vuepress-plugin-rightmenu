<template>
    <mu-menu :open.sync="showMenu" :style="menuStyle">
        <template v-slot:content>
            <mu-list>
                <mu-list-item button>
                    <mu-list-item-action v-for="(item, index) in iconBar" :key="item.icon + index">
                        <mu-icon v-model="item.icon"></mu-icon>
                    </mu-list-item-action>
                </mu-list-item>
                <mu-list-item v-for="(item, index) in normalActions" :key="'normal' + index">
                    <mu-list-item-title>{{ item.title }}</mu-list-item-title>
                </mu-list-item>
            </mu-list>
        </template>
    </mu-menu>
</template>

<script>
export default {
    data() {
        return {
            showMenu: false,
            menuStyle: {
                top: 0,
                left: 0,
            },
            iconBar: [
                {
                    icon: ':mdi-arrow-left',
                    handler() {
                        this.$router.go(-1);
                    },
                },
                {
                    icon: ':mdi-refresh',
                    handler() {
                        window.location.reload();
                    },
                },
                {
                    icon: ':mdi-home',
                    handler() {
                        if (this.$route.path !== '/') {
                            this.$router.push('/');
                        }
                    },
                },
                {
                    icon: ':mdi-arrow-right',
                    handler() {
                        this.$router.go(1);
                    },
                },
            ],
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
            this.menuStyle.left = e.clientX;
            this.menuStyle.top = e.clientY;
            this.$nextTick(() => {
                this.open = !this.open;
            });
        },
    },
};
</script>

<style scoped></style>
