<template>
  <div class="homesonleft">
    <div class="top">
      <img src="../img/图标.png" alt="" />
      <h3>物业管理系统</h3>
    </div>
    <!-- <div class="top_2" @click="router.push('/')">
      <el-icon><Odometer /></el-icon>首页
    </div> -->
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#304156"
      text-color="#fff"
      router
      :collapse="isCollapse"
    >
      <el-menu-item index="/dashboard">
        <el-icon><Odometer /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-sub-menu
        :index="index + ''"
        v-for="(item, index) in data.list"
        :key="index"
      >
        <template #title>
          <el-icon>
            <component is="Odometer"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <el-menu-item
          :index="it.path"
          v-for="it in item.children"
          :key="it.path"
          >{{ it.meta.title }}</el-menu-item
        >
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
import { GETgetMenuList } from '../utils/api.js'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import {
  ref,
  reactive,
  computed,
  defineProps,
  defineEmits,
  defineExpose
} from 'vue'

// 引入路由
const router = useRouter()
// 路由对象
const route = useRoute()
// 引入仓库
const store = useStore()

// 声明响应式数据
const data = reactive({
  list: []
})

const isCollapse = ref(false)

const getchebian = () => {
  GETgetMenuList().then((res) => {
    console.log(res)
    data.list = res.data.data
  })
}
getchebian()

// const dianji = () => {
//   isCollapse.value = !isCollapse.value
// }

// 父传子
const props = defineProps({})

// 子传父
const emit = defineEmits({})
</script>

<style lang="scss" scoped>
.top_2 {
  height: 40px;
  line-height: 40px;
  color: #ffffff;
  margin-left: 50px;
  cursor: pointer;

  img {
    width: 50px;
    height: 50px;
  }
}
.homesonleft {
  .top {
    display: flex;
    width: 100%;
    height: 60px;
    background-color: #2b2f3a;
    line-height: 60px;
    color: #ffffff;
    text-align: center;
    img {
      width: 30px;
      height: 30px;
      margin-top: 15px;
      margin-left: 20px;
      margin-right: 10px;
    }
    h3 {
      font-size: 17px;
    }
  }
}
</style>
