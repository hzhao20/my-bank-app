<template>
    <div class="transfer">
      <h2>Transfer</h2>
      <el-form :model="transferForm" ref="transferForm" label-width="120px">
        <el-form-item label="From Account">
          <el-select v-model="transferForm.from_account_number" placeholder="Select account">
            <el-option v-for="account in accounts" :key="account.number" :label="account.number" :value="account.number"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="To Account">
          <el-input v-model="transferForm.to_account_number"></el-input>
        </el-form-item>
        <el-form-item label="Amount">
          <el-input v-model.number="transferForm.amount"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="transfer">Transfer</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TransferM',
    data() {
      return {
        transferForm: {
          from_account_number: '',
          to_account_number: '',
          amount: 0
        },
        accounts: []
      }
    },
    created() {
      this.fetchAccounts()
    },
    methods: {
      fetchAccounts() {
        // 在这里添加从后端API获取用户账户列表的逻辑
        // 可以使用this.$axios.get('/user/account')获取账户列表
        // 然后将响应数据赋值给this.accounts
      },
      transfer() {
        // 在这里添加调用后端API进行转账的逻辑
        // 可以使用this.$axios.put('/user/transfer', this.transferForm)发送请求
      }
    }
  }
  </script>