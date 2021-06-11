import Vuetify from 'vuetify';
import './style/vuetify.modified.min.css';
import ContextMenu from './components/ContextMenu.vue';
const enhanceApp = ({ Vue, options }) => {
    // @ts-ignore
    Vue.use(Vuetify);
    options.vuetify = new Vuetify({});
    Vue.component('ContextMenu', ContextMenu);
};
export default enhanceApp;
//# sourceMappingURL=enhanceApp.js.map