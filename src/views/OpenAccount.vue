<template>
    <div class="open-account">
      <h2>Open Account</h2>
      <el-form :model="accountForm" ref="accountForm" label-width="120px">
        <el-form-item label="Account Type">
          <el-select v-model="accountForm.type" placeholder="Select account type">
            <el-option label="Saving" value="S"></el-option>
            <el-option label="Checking" value="C"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="OpenAccount">Open Account</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'OpenAccount',
    data() {
      return {
        accountForm: {
          type: ''
        }
      }
    },
    methods: {
      openAccount() {
        // 在这里添加调用后端API开立账户的逻辑
        // 可以使用this.$axios.post('/user/open', this.accountForm)发送请求
      }
    }
  }
  </script>