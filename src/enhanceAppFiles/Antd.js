import ContextMenu from '../menus/Antd';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.min.css';
import '@mdi/font/css/materialdesignicons.min.css';

export default ({ Vue }) => {
    Vue.use(Antd);
    Vue.component('ContextMenu', ContextMenu);
};
