<template>
  <div class="home">
    <homeleftson class="left"></homeleftson>
    <homerightson class="right"></homerightson>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import homeleftson from '@/components/Home_leftSon.vue'
import homerightson from '@/components/Home_rightSon.vue'
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
.home {
  display: flex;
  .left {
    width: 200px;
    height: 100vh;
    background-color: #304156;
  }
  .right {
    width: 80%;
    height: 100vh;
  }
}
</style>
