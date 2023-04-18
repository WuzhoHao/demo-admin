<template>
  <div class="homesonright">
    <header>
      <div class="left">
        <el-icon><Expand /></el-icon>
        首页
      </div>
      <div class="right" ref="buttonRef">
        <img src="../img/头像.gif" alt="" />

        <el-icon><CaretBottom /></el-icon>

        <el-popover
          ref="popoverRef"
          :virtual-ref="buttonRef"
          trigger="click"
          virtual-triggering
        >
          <div class="div">重设密码</div>
          <div class="div" @click="dianji">退出登录</div>
        </el-popover>
      </div>
    </header>
    <section>
      <router-view />
    </section>
  </div>
</template>

<script setup>
import { POSTloginOut } from '../utils/api.js'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
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

const buttonRef = ref()

const dianji = () => {
  POSTloginOut().then((res) => {
    ElMessageBox.confirm('确定要退出么?', '系统提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {
        localStorage.removeItem('token')
        router.push('/login')
        console.log(res)
        ElMessage({
          type: 'success',
          message: '退出成功'
        })
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: '已取消'
        })
      })
  })
}

// 父传子
const props = defineProps({})

// 子传父
const emit = defineEmits({})
</script>

<style lang="scss" scoped>
.div {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border: 1px #ccc solid;
  text-align: center;
  cursor: pointer;
}
header {
  width: 100%;
  display: flex;
  height: 60px;
  line-height: 60px;
  justify-content: space-between;
  padding: 0 20px;
  .right {
    cursor: pointer;
    img {
      width: 40px;
      height: 40px;
      border-radius: 10px;
    }
  }
}
</style>
