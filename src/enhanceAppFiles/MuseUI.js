import ContextMenu from '../menus/MuseUI';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import '@mdi/font/css/materialdesignicons.min.css';

export default ({ Vue }) => {
    Vue.use(MuseUI);
    Vue.component('ContextMenu', ContextMenu);
};
