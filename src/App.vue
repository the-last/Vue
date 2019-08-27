<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    
    <p>
      count from store and computing 同步计算斐波那契数  ... {{ flagFromStore }}
    </p>
    <p>
      {{ doneTodos('hi---',1) }}
    </p>
    <app2></app2>
    <router-view></router-view>
    
  </div>
</template>

<script>
import App2 from './App2.vue';
import './App.css';
import { mapGetters } from 'vuex';
import store from './store/index';
// const app = 'App'

export default {
  
  // beforeCreate() {
  //   console.log(app + '---beforeCreate--')
  // },
  // created() {
  //   console.log(app + '---created---')
  // },
  // beforeMount() {
  //   console.log(app + '---beforeMount---')
  // },
  // mounted() {
  //   console.log(app + '---mounted---')
  // },
  // beforeUpdate() {
  //   console.log(app + '---beforeUpdate---')
  // },
  // updated() {
  //   console.log(app + '---updated---')
  // },
  // beforeDestroy() {
  //   console.log(app + '---beforeDestory---')
  // },
  // destroyed() {
  //   console.log(app + '---destroyed---')
  // },
  mixins: [App2],
  car: 'LUHU',
  created () {
    console.log('%c car App  : -- ','color:#f00;font-size:16px;', this.$options.car);
  },
  store,
  computed: {
    flagFromStore() {
      const { count } = this.$store.state;
      let temp = count || this.fib(count || 1);
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
