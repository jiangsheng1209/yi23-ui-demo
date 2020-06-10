<!--text.vue-->
<template>
    <div class="xr-test" @click="handleClick">{{ num }}</div>
</template>

<script>
export default {
    name: 'XrTest', // 这个名字很重要，它就是未来的标签名<xr-text></xr-test>
    data () {
        return {
            num: 0
        }
    },
    props:{
        img_url:{
            type:String,
            default:''
        }
    },
    created(){
        console.log(this.img_url,'img_url')
    },
    methods:{
        handleClick () {
            this.num++
        }
    }
}
</script>

<style scoped>
.xr-test {
  width: 100px;
  height: 100px;
  line-height: 100px;
  border-radius: 50%;
  font-size: 30px;
  text-align: center;
  background: #24292e;
  color: white;
}
</style>