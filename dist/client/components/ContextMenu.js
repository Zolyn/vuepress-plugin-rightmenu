import Vue from 'vue';
import DefaultConfig from '../config';
import MenuItem from './MenuItem.vue';
import IconBar from './IconBar.vue';
let rightmenuConfig;
import(ZOLYN_RIGHTMENU_CONFIG).then(config => {
    rightmenuConfig = config;
}).catch(e => {
    console.error(e);
    console.warn('Cannot read custom configuration file. Using default configuration...');
    rightmenuConfig = DefaultConfig;
});
const ContextMenu = Vue.extend({
    components: {
        MenuItem,
        IconBar,
    },
    data() {
        return Object.assign(Object.assign({ that: this, showMenu: false, xPos: 0, yPos: 0, clickListener: false, currentLink: '', currentImage: '', clipboard: '', itemList: [] }, DefaultConfig), rightmenuConfig);
    },
    mounted() {
        this.$nextTick(() => {
            document.addEventListener('contextmenu', (e) => {
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
            const elements = e.composedPath();
            for (const val of this.sniffingFunctions.image) {
                const result = val.fn(elements);
                if (result) {
                    this.currentImage = result;
                    items.push(...this.eventActions.image);
                    break;
                }
            }
            for (const val of this.sniffingFunctions.link) {
                const result = val.fn(elements);
                if (result) {
                    this.currentLink = result;
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
    }
});
export default ContextMenu;
//# sourceMappingURL=ContextMenu.js.map