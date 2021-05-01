<template>
    <a-dropdown v-model="showMenu" :style="menuStyle">
        <template v-slot:overlay>
            <a-menu>
                <a-menu-item v-for="(item, index) in normalActions" :key="'normal' + index">
                    {{ item.title }}
                </a-menu-item>
            </a-menu>
        </template>
    </a-dropdown>
</template>

<script>
export default {
    data() {
        return {
            showMenu: false,
            menuStyle: {
                top: '0px',
                left: '0px',
            },
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
            this.menuStyle.left = e.clientX + 'px';
            this.menuStyle.top = e.clientY + 'px';
            this.$nextTick(() => {
                this.showMenu = true;
            });
        },
    },
};
</script>

<style scoped></style>
