import ContextMenu from '../menus/VueMaterial';
import { MdMenu, MdLayout, MdButton, MdIcon } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import '@mdi/font/css/materialdesignicons.min.css';

export default ({ Vue }) => {
    Vue.use(MdMenu);
    Vue.use(MdLayout);
    Vue.use(MdButton);
    Vue.use(MdIcon);
    Vue.component('ContextMenu', ContextMenu);
};
