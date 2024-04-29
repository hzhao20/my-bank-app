<template>
    <div class="reset-password-container">
      <el-form :model="resetPasswordForm" :rules="rules" ref="resetPasswordForm" label-width="100px" class="reset-password-form">
        <h2 class="reset-password-title">Reset Password</h2>
        <el-form-item label="Username" prop="username">
          <el-input v-model="resetPasswordForm.username"></el-input>
        </el-form-item>
        <el-form-item label="New Password" prop="password">
          <el-input type="password" v-model="resetPasswordForm.password"></el-input>
        </el-form-item>
        <el-form-item label="Keyword" prop="keyword">
          <el-input v-model="resetPasswordForm.keyword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleResetPassword">Reset</el-button>
          <el-button  @click="back">Back</el-button>

        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ResetPassword',
    data() {
      return {
        resetPasswordForm: {
          username: '',
          password: '',
          keyword: ''
        },
        rules: {
          username: [
            { required: true, message: 'Please input username', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Please input new password', trigger: 'blur' }
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
      handleResetPassword() {
        this.$refs.resetPasswordForm.validate(valid => {
          if (valid) {
            this.$axios.put('/user/reset', this.resetPasswordForm)
              .then(response => {
                console.log(response.data)
                // TODO: Handle successful password reset logic
                this.$message({
          message: 'Reset Successfully',
          type: 'success'
        });
              })
              .catch(error => {
                console.log(error)
                // TODO: Handle password reset failure logic
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
  .reset-password-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
    
    .reset-password-form {
      width: 400px;
      padding: 20px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      
      .reset-password-title {
        text-align: center;
        margin-bottom: 20px;
      }
    }
  }
  </style>