<template>
  <div class="hello">
	<button @click="scrollsmooth" :style="{color: 'red'}">平滑滚动 --> 底部</button>
  <h1>{{ count }} store中 count的 值</h1>
  <button @click="StoreCommitCount">增加count值</button>
	<p>
		来自命名空间的state值
		{{ admin }} {{ userNa }}
	</p>
	<p>
		From Store Module A .
		<span>{{ doneVegetables }}</span> <!--  从 getter 中取值 -->
		<!-- <span>{{ this.$store.state.a.slump }}</span> -->
	</p>
	<p>
		Store manage Test.
		<button @click="StoreCommitA">commit -Store-Module A</button>
	</p>

	<p>
		From Store Module B.
		<span>{{ doneLoads }}</span>
		<!-- <span>{{ this.$store.state.b.bike }}</span>   从模块中取值  -->
	</p>
	<p>
		Store manage Test.
		<button @click="StoreCommitB">commit -Store-Module B</button>
	</p>
	<p>
		From Store Getters 两次 传参getter .
		<span>{{ doneTodos('',2) }}</span>
	</p>
	<p>
		From Store Getters .
		<span>{{ aliasFillname }}</span>
	</p>
	<p>
      Store manage Test.
      <button @click="StoreCommit">commit -Store-Module 非module </button>
    </p>
	

    <p :style="{backgroundColor: 'white'}">
		<span  class="fullSpan">我特别高</span>
		<span  class="fullSpan">我特别高</span>
		<span  class="fullSpan">我特别高</span>
		<span  class="fullSpan">我特别高</span>
		<span  class="fullSpan">路过的路人甲-</span>
		<span  class="fullSpan">我特别高</span>
		<span  class="fullSpan">我特别高</span>
		<span  class="fullSpan">我特别高</span>
		<span  class="fullSpan">我特别高</span>
		<span  class="fullSpan">我特别高</span>
		<span  class="fullSpan">我特别高</span>
	</p>
    <p ref="bottom01"><span>我在底部</span></p>
    <button @click="scrollsmooth(-100)">到顶部平滑滚动</button>
  </div>
</template>

<script>
import { mapState, mapGetters,  createNamespacedHelpers} from "vuex";
// const { mapState } = createNamespacedHelpers('account') ;
import moduleC from '../store/moduleC';
import store from "../store/index";
import utils from "../utils/index";



export default {
	name: "HelloWorld",
	props: {},
	data() {
		return {
            localCount: 999
		};
	},
	store,
	created() {
		this.$store.registerModule('moduleC', moduleC); 
	},
	computed: {
		...mapGetters(["doneTodos", "doneVegetables", "doneLoads", ]),
		...mapGetters({
			aliasFillname: "getFillName", // 给 getter 加别名。
			admin: "account/isAdmin",
		}),
		...mapState({
			count: state => state.count,
			userNa: "userName"  // 直接访问state无效，需要配置命名空间。 或者使用 createNamespacedHelpers
		}),
		// ...mapState('account', {userNa: 'userName'})  添加命名空间   才能访问到空间的 state
	},
	methods: {
		...utils,
		StoreCommitA() {
			this.$store.commit('changeFruit');  // commit 触发 mutation。
		},
		StoreCommitB() {
			this.$store.commit('changeBike');
		},
		StoreCommit() {
			this.$store.commit('changeName');
			//this.$store.dispatch("actionS");
		},
		StoreCommitCount() {
      this.$store.commit('increment')
		},
		scrollsmooth(scope) {
			this.$nextTick(() => {
				this.smoothScroll( typeof scope === "number" ? scope : "" || this.$refs.bottom01, null, 500);
			});
		},
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
	width: 800px;
	margin: auto;
	padding: 20px;
	text-align: left;
}
h3 {
margin: 40px 0 0;
}
ul {
list-style-type: none;
padding: 0;
}
li {
display: inline-block;
margin: 0 10px;
}
a {
color: #42b983;
}
p {
	display: flow-root;
	position: relative;
	border-bottom: 1px solid rgba(200, 200, 200, .5);
	min-height: 40px;
	line-height: 40px;
	color: #FF4C4C;
}
p > span, p > button{
	float: right;
	display: block;
	width: 300px;
	white-space: normal;
	font-weight: 700;
	color: green;
	text-align: left;
	word-break: break-all;

}
button {
	display: inline-block;
	border-radius: 2px;
	height: 36px;
	line-height: 36px;
	cursor: pointer;
}

.fullSpan {
	display: inline-block;
	width: 100%;
	height: 70px;
	line-height: 100px;
	border-bottom: 1px solid gray;
}
</style>
