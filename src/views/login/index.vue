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
          <el-button type="primary" @click="handleGithubSinIn">github登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>

import loginApi from '@/api/loginApi'
import tokenApi from '@/api/tokenApi'
import userApi from '@/api/userApi'

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
      },
      code: '',
      state: ''
    }
  },
  mounted () {
    this.code = this.$route.query.code
    this.state = this.$route.query.state
    if (this.code) {
      this.getToken()
    }
  },
  methods: {
    getToken () {
      tokenApi.getTokenFromService(this.code, this.state, this.$auth.github)
        .then((data) => {
          tokenApi.saveLoginInfo(data)
          userApi.getUserInfo(this.$auth.github.userInfoUri).then(data => {
            this.$store.dispatch('login/signIn', data)
            this.$router.push('/home')
            const message = ((h) => {
              return (
                <p>
                  欢迎登录 <b>{data.name}</b>
                </p>
              )
            })(this.$createElement)
            this.$message({
              // message: `欢迎您 <br>${data.name}</br>`,
              message,
              type: 'success'
            })
          })
        })
        .catch(error => {
          this.$message({
            message: error,
            type: '登录失败，请重试'
          })
        })
    },
    handleGithubSinIn () {
      let { userAuthorizationUri, clientId, response_type: responseType, scope, state, redirect_uri: redirectUri } = this.$auth.github
      let url = `${userAuthorizationUri}?client_id=${clientId}&response_type=${responseType}&scope=${scope}&state=${state}&redirect_uri=${redirectUri}`
      window.location.href = url
    },
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
      loginApi.signIn(this.login).then(res => {
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
