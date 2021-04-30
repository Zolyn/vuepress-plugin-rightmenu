<template>
    <ui-popover ref="dropdown" :style="menuStyle">
        <ui-menu :options="actions" @close="$refs.dropdown.close()">
            <template v-slot:option="props">
                <div class="ui-menu-option__text" @click="props.option.handler.call(that)">
                    {{ props.option.title }}
                </div>
            </template>
        </ui-menu>
    </ui-popover>
</template>

<script>
export default {
    data() {
        return {
            that: this,
            showMenu: false,
            menuStyle: {
                left: 0,
                top: 0,
            },
            actions: [
                {
                    title: 'Default 1',
                    handler() {
                        alert('1');
                    },
                },
                {
                    title: 'Default 2',
                    handler() {
                        alert('2');
                    },
                },
                {
                    title: 'Default 3',
                    handler() {
                        alert('3');
                    },
                },
                {
                    title: 'Default 4',
                    handler() {
                        alert('4');
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
            if (!this.showMenu) {
                this.menuStyle.left = e.clientX;
                this.menuStyle.top = e.clientY;
                this.$refs.dropdown.open();
            }
        },
    },
};
</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css';
</style>
