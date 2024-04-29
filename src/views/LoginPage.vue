<template>
  <div class="login-container">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="login-form">
      <h2 class="login-title">User Login</h2>
      <el-form-item label="Username" prop="username">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item >
        <el-button type="primary" @click="handleLogin">Login</el-button>
        <el-button @click="handleRegister">Register</el-button>
        <el-button @click="handleForgotPassword">Forgot Password</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: 'Please input username', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please input password', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$axios.post('/login', this.loginForm)
            .then(response => {
              console.log(response.data)
              // TODO: Handle successful login logic
            })
            .catch(error => {
              console.log(error)
              // TODO: Handle login failure logic
            })
        } else {
          console.log('Form validation failed')
          return false
        }
      })
    },
    handleRegister() {
      this.$router.push('/register')
      console.log('Register button clicked')
    },
    handleForgotPassword() {
      this.$router.push('/reset')
      console.log('Forgot Password button clicked')
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  
  .login-form {
    width: 400px;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    
    .login-title {
      text-align: center;
      margin-bottom: 20px;
    }
  }
}
</style>