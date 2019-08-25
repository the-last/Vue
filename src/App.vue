<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>
      count from store and computing 同步计算斐波那契数  ... {{ fibFromStore }}
    </p>
    <p>
      {{ doneTodos('hi---',1) }}
    </p>
    <HelloWorld />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import store from './store/index';
import HelloWorld from './components/HelloWorld.vue'
const app = 'App'
export default {
  name: 'app',
  beforeCreate() {
    console.log(app + '---beforeCreate--')
  },
  created() {
    console.log(app + '---created---')
  },
  beforeMount() {
    console.log(app + '---beforeMount---')
  },
  mounted() {
    console.log(app + '---mounted---')
  },
  beforeUpdate() {
    console.log(app + '---beforeUpdate---')
  },
  updated() {
    console.log(app + '---updated---')
  },
  beforeDestroy() {
    console.log(app + '---beforeDestory---')
  },
  destroyed() {
    console.log(app + '---destroyed---')
  },
  components: {
    HelloWorld
  },
  store,
  computed: {
    fibFromStore() {
      console.time('computed-fibFromStore-开始');
      const { count } = this.$store.state;
      let temp = this.fib(count || 1);
      console.timeEnd('computed-fibFromStore-开始');
      return temp;
    },
    ...mapGetters([
      'doneTodos',
    ]),
  },
  
  methods: {
    fib (num) {
      if (num <= 1) return 1;
      return this.fib(num - 1) + this.fib(num - 2);
    }
  },
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
