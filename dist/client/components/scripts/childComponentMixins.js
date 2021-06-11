import Vue from 'vue';
const Mixins = Vue.extend({
    props: {
        list: {
            type: Array,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        parent: {
            required: true,
        },
        dense: {
            type: Boolean,
        },
    }
});
export default Mixins;
//# sourceMappingURL=childComponentMixins.js.map