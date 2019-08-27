
<template>
  <div>
    
    <p>
        我只是一个将被引用的子组件而已
        <span>
            子组件就是我 ITs me
        </span>
    </p>
    
  </div>
</template>

<script>
export default {
    car: 'HH',
    created() {
        console.log('%c car App2 : -- ','color:#f00;font-size:16px;', this.$options.car)
    }
}
</script>

