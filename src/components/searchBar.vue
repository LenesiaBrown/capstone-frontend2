<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    handleInput() {
      // Handle user input if needed
    },
    handleSearch() {
      // Trigger search action with searchQuery value
      // For example, you can emit an event or call a method in a parent component
      this.$emit('search', this.searchQuery);
    },
  },
};
</script>

<style lang="scss">
/* Import Sass styles */
@import './searchBar.scss';
</style>
