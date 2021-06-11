import { PluginFunction } from '@mr-hope/vuepress-types';
import { PluginOpts } from '../../types';
import { resolve } from 'path';

const Plugin: PluginFunction<PluginOpts> = (opts) => ({
    name: '@zolyn/vuepress-plugin-rightmenu',
    define: () => ({
        ZOLYN_RIGHTMENU_CONFIG: opts.config,
    }),
    enhanceAppFiles: resolve(__dirname, '../client/enhanceApp.js'),
    globalUIComponents: 'ContextMenu',
});
