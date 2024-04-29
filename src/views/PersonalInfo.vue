<template>
    <div class="personal-info">
      <h2>Personal Information</h2>
      <el-form :model="userForm" ref="userForm" label-width="120px" class="user-form">
    

        <el-form-item label="First Name">
          <el-input v-model="userForm.fname"></el-input>
        </el-form-item>
        <el-form-item label="Last Name">
          <el-input v-model="userForm.lname"></el-input>
        </el-form-item>
        <el-form-item label="State">
          <el-input v-model="userForm.state"></el-input>
        </el-form-item>
        <el-form-item label="City">
          <el-input v-model="userForm.city"></el-input>
        </el-form-item>
        <el-form-item label="Zip Code">
          <el-input v-model="userForm.zip"></el-input>
        </el-form-item>
    
        <el-form-item label="Address">
          <el-input v-model="userForm.address"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="updateUserInfo">Update</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PersonalInfo',
    data() {
      return {
        userForm: {

          fname: '',
          lname: '',
          state: '',
          city: '',
          zip: '',
          address: ''
        }
      }
    },
    mounted() {
      this.fetchUserInfo()
    },
    methods: {
      fetchUserInfo() {
        this.$axios.get('/user/user')
          .then(response => {
            this.userForm = response.data.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
            // TODO: Handle error
          })
      },
      updateUserInfo() {
        this.$axios.put('/user/user', this.userForm)
          .then(response => {
            console.log(response.data)
            // TODO: Handle successful update
            this.$message({
          message: 'Update Successfully',
          type: 'success'
        },
        this.fetchUserInfo()
    );
          })
          .catch(error => {
            console.log(error)
            // TODO: Handle error
            this.$message.error(error.response.data.message);
          })
      }
    }
  }
  </script>
  
  <style lang="less" scoped>
  .personal-info {
    max-width: 600px;
    margin: 0 auto;
    
    h2 {
      text-align: center;
      margin-bottom: 20px;
    }
    
    .user-form {
      .el-form-item {
        margin-bottom: 20px;
      }
      
      .el-input {
        width: 100%;
      }
      
      .el-button {
        width: 100%;
      }
    }
  }
  </style>