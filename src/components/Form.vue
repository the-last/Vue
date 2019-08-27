<template>
    <div>
        <h2>
            <router-link to="/hello">首页</router-link>
        </h2>
        <form>
            <label for="message">信息</label>
            <input v-model="message">

        </form>
        
        <p :style="{textAlign: 'left',color: 'red', display: 'flow-root'}">
            来自mock数据：  Mock Test
            <button
               @click="getPersonList"
               :style="{float: 'right', color: 'red', borderColor: 'red'}"
            >
                获取mock数据，通过 Action
            </button>
        </p>
        <p :key="flag" v-for="(item, flag) in mockData">
            {{ item }}
        </p>

    </div>
</template>


<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
    name: 'Form',
    data () {
        return {
            obj: {
                message: 'form 信息',
            }
        }
    },
    computed: {
        message: {
            get () {
                return this.count
            },
            set (value) {
                this.increment({count: value})
            }
        },
        ...mapState([
            'count',
            'mockData'
        ]),
    },
    methods: {
        ...mapMutations([
            'increment'
        ]),
        ...mapActions({
            getPersonList: 'actionGetMockDataPersonList'
        }),
    },
}
</script>

<style lang="less" scoped>
    div {
        width: 900px;
        margin: auto
    }
</style>