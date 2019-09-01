<template>
  <div id="app">
    <img class="transition-auto" alt="Vue logo" src="./assets/logo.png">
    
    <p>
      count from store and computing 同步计算斐波那契数  ... {{ flagFromStore }}
    </p>
    <p>
      {{ doneTodos('hi---',1) }}
    </p>
    <router-view></router-view>
    
  </div>
</template>

<script>
import './App.css';
import { mapGetters } from 'vuex';
import store from './store/index';

export default {
  
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

  mounted () {
    this.$nextTick(() => {
       let target = document.getElementById('transition-switch');
       target.addEventListener('transitionend', (e) => {
         e.stopPropagation();
         console.log('finish---');
       }, false);

       let pra = document.getElementById('app');
       pra.addEventListener('transitionend', () => {
         console.log('父级  finish---');
       }, false);
    })
  }
}
</script>

<style lang="less" >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .transition-forever {
    display: block;
    transition: .5s 999999s;
    width: 100px;
    height: auto;
    &:hover {
      width: 50px;
      height: auto;
      transition: .5s width ease-in-out .5s;
    }
  }
  #transition-switch {
    display: block;
    transition: all 1s ease-in-out;
    padding: 1px;
    width: 100px;
    height: auto;
    &:hover {
      padding: 5px;
      transform: scale(.5);
    }
  }
  .transition-auto {
    display: block;
    transition: width 1s ease-in-out;
    padding: 1px;
    width: 80px;
    height: auto;
    &:hover {
      width: auto;
    }
  }
}


</style>
