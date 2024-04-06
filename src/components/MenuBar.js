export default {
    name: 'MenuBar',
    data() {
        return {
            dropdown: {
                service: false
            }
        };
    },
    methods: {
        showDropdown(key) {
            this.dropdown[key] = true;
        },
        hideDropdown(key) {
            this.dropdown[key] = false;
        }
    }
}