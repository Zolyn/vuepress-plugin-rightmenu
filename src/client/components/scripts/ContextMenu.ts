import Vue from 'vue';
import {NormalActions, RightmenuConfig} from '@typings/config';
import DefaultConfig from '@client/config';
import MenuItem from '../MenuItem.vue';
import IconBar from '../IconBar.vue';

interface ComponentData extends Required<RightmenuConfig> {
    that: unknown;
    showMenu: boolean;
    clickListener: boolean;
    xPos: number;
    yPos: number;
    currentLink: string;
    currentImage: string;
    clipboard: string;
    itemList: NormalActions[];
}

let rightmenuConfig: RightmenuConfig;

import(ZOLYN_RIGHTMENU_CONFIG).then(config => {
    rightmenuConfig = config;
}).catch(e => {
    console.error(e);
    console.warn('Cannot read custom configuration file. Using default configuration...');
    rightmenuConfig = DefaultConfig;
});


const ContextMenu = Vue.extend({
    components: {
        MenuItem: new MenuItem(),
        IconBar: new IconBar(),
    },
    data(): ComponentData {
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
            ...DefaultConfig,
            ...rightmenuConfig
        }
    },
    mounted() {
        this.$nextTick(() => {
            document.addEventListener('contextmenu', (e): void => {
                this.handleClick(e);
            });

            window.addEventListener('click', () => {
                if (this.showMenu) {
                    this.showMenu = false;
                }
            });

            console.log(`DEBUG: Initialized. [${Math.floor(Math.random() * 100)}]`);
        })
    },
    methods: {
        handleClick(e: MouseEvent): void {
            e.preventDefault();
            this.showMenu = false;
            this.xPos = e.clientX;
            this.yPos = e.clientY;
            this.getItemList(e);
            this.$nextTick((): void => {
                this.showMenu = true;
            });
        },
        getItemList(e: MouseEvent) {
            const items: NormalActions[] = [];
            const elements = e.composedPath();

            for (const val of this.sniffingFunctions.image) {
                const result = val.fn(elements as HTMLImageElement[]);
                if (result) {
                    this.currentImage = result;
                    items.push(...this.eventActions.image);
                    break;
                }
            }

            for (const val of this.sniffingFunctions.link) {
                const result = val.fn(elements as HTMLAnchorElement[]);
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
            const container = document.querySelector('#clipboard-container') as HTMLInputElement;
            container.select();
            document.execCommand('copy');
        },
    }
});

export default ContextMenu;