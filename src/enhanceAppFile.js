import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';
import '@mdi/font/css/materialdesignicons.min.css';

import ContextMenu from "./ContextMenu";

export default ({ Vue, options }) => {
    Vue.use(Vuetify);
    options.vuetify = new Vuetify({});
    Vue.component('ContextMenu', ContextMenu);
}
