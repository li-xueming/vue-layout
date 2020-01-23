<template>
  <div class="login_warp">
    <el-card class="login-box">
      <el-form :model="login" ref="login" :rules="rule">
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="login.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input show-password v-model="login.pwd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSinIn">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>

import api from '@/assets/js/api/login'

export default {
  data () {
    return {
      login: {
        userName: '',
        pwd: ''
      },
      rule: {
        userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        pwd: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    /**
         * 登录事件
         */
    handleSinIn () {
      this.$refs.login.validate(valid => {
        if (valid) {
          this.signIn()
        }
      })
    },
    /**
       * 登录
       */
    signIn () {
      this.$post(api.SIGN_IN, this.login).then(res => {
        this.$message({
          message: '登录成功',
          type: 'success'
        })
        this.$store.dispatch('login/signIn', res)
        this.$router.push('/home')
      }).catch(error => {
        this.$message({
          type: 'error',
          message: error.message
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .login_warp {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    .login-box {
      width: 40vw;
      min-height: 50vh;
      height: 50vh;
      flex: 0.3;
    }
  }
</style>
