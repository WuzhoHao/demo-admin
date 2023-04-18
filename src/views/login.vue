<template>
  <div class="login">
    <el-card class="box-card">
      <div>
        <h2>小区物业管理</h2>
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          class="demo-ruleForm"
          :size="formSize"
          status-icon
        >
          <el-form-item prop="username">
            <el-input v-model="ruleForm.username" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="ruleForm.password"
              placeholder="请输入密码"
              show-password
            />
          </el-form-item>
          <el-form-item prop="userType">
            <el-radio-group v-model="ruleForm.userType">
              <el-radio label="0"> 业主</el-radio>
              <el-radio label="1"> 物主</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              class="button"
              @click="submitForm(ruleFormRef)"
            >
              登录
            </el-button>
            <el-button class="button" @click="resetForm(ruleFormRef)"
              >取消</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { POSTlogin } from '../utils/api.js'
import { ElMessage } from 'element-plus'
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

const ruleFormRef = ref()

// 声明响应式数据
const ruleForm = reactive({
  username: 'admin',
  password: '123456',
  userType: 1
})

const rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 18, message: '用户名请在3-18位字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 3, max: 18, message: '密码请在3-18位字符', trigger: 'blur' }
  ],
  userType: [{ required: true, message: '请选择您的位置', trigger: 'blur' }]
})

const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      // console.log('submit!', ruleForm)
      POSTlogin(ruleForm).then((res) => {
        console.log(res)
        if (res.data.code != 200) {
          ElMessage({
            message: res.data.msg,
            type: 'warning'
          })
          return
        } else {
          ElMessage({
            message: res.data.msg,
            type: 'success'
          })
          localStorage.setItem('token', res.data.data.token)
          router.push('/')
        }
      })
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}

// 父传子
const props = defineProps({})

// 子传父
const emit = defineEmits({})
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background-image: url('../img/背景图.png');
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 30px;
    color: #447fe5;
  }
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
.button {
  width: 210px;
}
</style>
