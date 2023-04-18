<template>
  <div class="sysUserList">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>sysUserList</el-breadcrumb-item>
    </el-breadcrumb>
    <br />
    sysUserList
  </div>
</template>

<script setup>
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
const data = reactive({})

// 父传子
const props = defineProps({})

// 子传父
const emit = defineEmits({})
</script>

<style lang="scss" scoped>
.sysUserList {
}
</style>
