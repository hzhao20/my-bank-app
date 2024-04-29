<template>
    <div class="register-container">
      <el-form :model="registerForm" :rules="rules" ref="registerForm" label-width="100px" class="register-form">
        <h2 class="register-title">User Registration</h2>
        <el-form-item label="Username" prop="username">
          <el-input v-model="registerForm.username"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input type="password" v-model="registerForm.password"></el-input>
        </el-form-item>
        <el-form-item label="Keyword" prop="keyword">
          <el-input v-model="registerForm.keyword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleRegister">Register</el-button>
          <el-button  @click="back">Back</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SignUp',
    data() {
      return {
        registerForm: {
          username: '',
          password: '',
          keyword: ''
        },
        rules: {
          username: [
            { required: true, message: 'Please input username', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Please input password', trigger: 'blur' }
          ],
          keyword: [
            { required: true, message: 'Please input keyword', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
        back() {
            this.$router.push('/')
        },
      handleRegister() {
        this.$refs.registerForm.validate(valid => {
          if (valid) {
            this.$axios.post('/user/register', this.registerForm)
              .then(response => {
                console.log(response.data)
                // TODO: Handle successful registration logic
                this.$message({
          message: 'Register Successfully',
          type: 'success'
        });
              })
              .catch(error => {
                console.log(error)
                // TODO: Handle registration failure logic
                this.$message.error(error.response.data.message);
              })
          } else {
            console.log('Form validation failed')
            return false
          }
        })
      }
    }
  }
  </script>
  
  <style lang="less" scoped>
  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
    
    .register-form {
      width: 400px;
      padding: 20px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      
      .register-title {
        text-align: center;
        margin-bottom: 20px;
      }
    }
  }
  </style>