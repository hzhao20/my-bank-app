<template>
    <div class="pay-loan">
      <h2>Pay Loan</h2>
      <el-form :model="paymentForm" ref="paymentForm" label-width="120px">
        <el-form-item label="Loan Account">
          <el-select v-model="paymentForm.account" placeholder="Select loan account">
            <el-option v-for="account in loanAccounts" :key="account.number" :label="account.number" :value="account.number"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="payLoan">Pay Loan</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PayLoan',
    data() {
      return {
        paymentForm: {
          account: ''
        },
        loanAccounts: []
      }
    },
    created() {
      this.fetchLoanAccounts()
    },
    methods: {
      fetchLoanAccounts() {
        // 在这里添加从后端API获取用户贷款账户列表的逻辑
        // 可以使用this.$axios.get('/user/loan')获取贷款账户列表
        // 然后将响应数据赋值给this.loanAccounts
      },
      payLoan() {
        // 在这里添加调用后端API支付贷款的逻辑
        // 可以使用this.$axios.post('/user/pay', this.paymentForm)发送请求
      }
    }
  }
  </script>