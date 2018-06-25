<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <vue-markdown :prerender="pre" :postrender="post" :source="frontPost"> </vue-markdown>
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
//import VueSimpleMarkdown from 'vue-simple-markdown'
import VueMarkdown from 'vue-markdown'

export default {
  name: 'app',
  methods: {
    pre: function(string) {
      return string
    },
    post: function(string) {
      console.log(string)
      const image = /<img src="(.+?)" alt="(.+?)" \/>/
      return string
    },
  },
  computed: {
    loading () {
      return this.$store.state.loading
    },
    frontPost () {
      if (this.$store.state.entries) {
        return this.$store.state.entries['3P1gYn6HD26oIwYKOKaq0W'].body
      }
      return ""
    }
  },
  created () {
    this.$store.dispatch('getEntries')
  },
  components: {
    Sidebar,
    VueMarkdown
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
