<template>
    <div>
       <head-top :head-title="cityname" go-back='true'>
            <router-link to="/home" slot="changecity" class="change_city">切换城市</router-link>
        </head-top>
    </div>
</template>

<script>
import headTop from "src/components/header/head";
  import {currentcity, searchplace} from 'src/service/getData'
    import {getStore, setStore, removeStore} from 'src/config/mUtils'
export default {
  data() {
    return {
      inputVaule: "", // 搜索地址
      cityid: "", // 当前城市id
      cityname: "", // 当前城市名字
      placelist: [], // 搜索城市列表
      placeHistory: [], // 历史搜索记录
      historytitle: true, // 默认显示搜索历史头部，点击搜索后隐藏
      placeNone: false // 搜索无结果，显示提示信息
    };
  },
  components:{
      headTop
  }


};
</script>

<style>
</style>
