import ContextMenu from '../src/client/components/ContextMenu';

import Vuetify from 'vuetify';
import '../src/client/style/vuetify.modified.min.css';
import '@mdi/font/css/materialdesignicons.min.css';

export default ({ Vue, options }) => {
    Vue.use(Vuetify);
    options.vuetify = new Vuetify({});
    Vue.component('ContextMenu', ContextMenu);
};
