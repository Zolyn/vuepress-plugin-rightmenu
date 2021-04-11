import Vuetify from 'vuetify';
import Menu from "./Menu";

export default ({ Vue }) => {
    Vue.use(Vuetify);
    Vue.component('Menu', Menu);
}