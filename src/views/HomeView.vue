<template>
  <div class="home">    
    <main>
      <BodyContent />    
    </main>
    <footer>
      <p>&copy; 2024 Campus Marketplace.</p>
    </footer>
  </div>
</template>


<script>
import BodyContent from '@/components/BodyContent.vue';

export default {
  name: 'HomeView',
  components: {
    BodyContent
  },
};
</script>





<!-- <script>
import SearchBar from '@/components/searchBar.vue'; // Adjust the path as needed

export default {
  name: 'HomeView',
  components: {
    SearchBar,
  },
  methods: {
    handleSearch(query) {
      // Handle search action with the query parameter
      console.log('Search query:', query);
      // You can perform a search action here, such as filtering data or making an API request
    },
  },
};
</script> -->

<!-- <style lang="scss">
/* Add your Sass styles here */
.home {
  font-family: Arial, sans-serif;
  text-align: center;
}

header {
  background-color: #333;
  color: #fff;
  padding: 20px;
}

.main {
  padding: 20px;
}

.hero {
  background-color: #f0f0f0;
  padding: 40px;
}

.hero h2 {
  margin-bottom: 20px;
}

.features {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}

.feature {
  text-align: center;
  flex: 1;
  margin: 0 10px;
}

footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
}
</style> -->




<!-- <template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script> -->


