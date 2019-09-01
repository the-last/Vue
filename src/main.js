import Vue from 'vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';
import App from './App.vue'
import store from './store';
import router  from './router';

require('./mock/mock');
import axios from 'axios';

axios.defaults.baseURL = 'http://mockjs.com/api'
Vue.prototype.$http = axios;
Vue.config.silent = true; // 取消vue组件内所有日志和警告,不包括vuex


// 自定义选项中，合并策略的问题,  在组件继承的范围内。
Vue.config.optionMergeStrategies.car = function (parentValue,  childValue) {
	
	console.log('mixins 可能是写在子组件 - car', 'parentValue -- ', parentValue, 'childValue -- ', childValue);
	console.log('\n\n');
	console.log('------------------------------')
    return  childValue ?  childValue : parentValue
}

// 阻止在启动时，生成生产提示
Vue.config.productionTip = false

// 获取组件中具体的报错信息
Vue.config.errorHandler = function (err, vm, info) {
	// handle error
	// `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
	// 只在 2.2.0+ 可用
	console.log(err, 'err\n' );
	console.log(vm, 'vm\n' );
	console.log(info, 'info\n' );
}


Vue.use(VueRouter);
Vue.use(Vuex);

// 同步路由和Store
sync(store, router);

new Vue({
	store,
	router,
	render: h => h(App),
	// template: '<App />' 运行时模式不支持魔板
	// components: { App }
}).$mount('#app');

