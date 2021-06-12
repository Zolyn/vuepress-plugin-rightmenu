import {RightmenuConfig, NormalActions} from './config';

interface PluginOpts {
    config: string;
}

declare global {
    const ZOLYN_RIGHTMENU_CONFIG: string;
}

export { PluginOpts, RightmenuConfig, NormalActions };