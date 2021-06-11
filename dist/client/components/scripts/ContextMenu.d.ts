import Vue from 'vue';
import { NormalActions, RightmenuConfig } from '@typings/config';
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
declare const ContextMenu: import("vue/types/vue").ExtendedVue<Vue, ComponentData, {
    handleClick(e: MouseEvent): void;
    getItemList(e: MouseEvent): void;
    copy(): void;
}, unknown, Record<never, any>>;
export default ContextMenu;
//# sourceMappingURL=ContextMenu.d.ts.map