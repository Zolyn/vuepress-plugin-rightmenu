import MenuLoader from './MenuLoader';

export default ({ Vue }) => {
    import('keen-ui').then((module) => {
        Vue.use(module);
        Vue.component('MenuLoader', MenuLoader);
    });
};
