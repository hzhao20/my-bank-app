<template>
    <div class="admin-register">
      <h2>Admin Register</h2>
      <el-form :model="registerForm" :rules="rules" ref="registerForm" label-width="120px">
        <el-form-item label="Username" prop="username">
          <el-input v-model="registerForm.username"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input type="password" v-model="registerForm.password"></el-input>
        </el-form-item>
        <el-form-item label="Keyword" prop="keyword">
          <el-input type="keyword" v-model="registerForm.keyword"></el-input>
        </el-form-item>
        <el-form-item label="Role" prop="role">
          <el-select v-model="registerForm.role" placeholder="Select role">
            <el-option label="Admin" value="A"></el-option>
            <el-option label="Customer" value="C"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm">Register</el-button>
          <el-button @click="resetForm">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminRegister',
    data() {
      return {
        registerForm: {
          username: '',
          password: '',
          role: '',
          keyword:''
        },
        rules: {
          username: [
            { required: true, message: 'Please input username', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Please input password', trigger: 'blur' },
            { min: 6, message: 'Password should be at least 6 characters', trigger: 'blur' }
          ],
          role: [
            { required: true, message: 'Please select role', trigger: 'change' }
          ],
          keyword: [
            { required: true, message: 'Please enter the keyword', trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      submitForm() {
        this.$refs.registerForm.validate((valid) => {
          if (valid) {
            this.$axios.post('/admin/register', this.registerForm)
              .then(response => {
                console.log(response);
                this.$message({
                  message: 'Registration successful',
                  type: 'success'
                });
                this.resetForm();
              })
              .catch(error => {
                console.log(error);
                this.$message.error(error.response.data.message);
              });
          } else {
            return false;
          }
        });
      },
      resetForm() {
        this.$refs.registerForm.resetFields();
      }
    }
  }
  </script>
  
  <style scoped>
  .admin-register {
    width: 400px;
    margin: 0 auto;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  </style>