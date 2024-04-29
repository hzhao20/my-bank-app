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
  import axios from 'axios';
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
    mounted() {
      this.fetchAccounts()
    },
    methods: {
      fetchAccounts() {
        axios.get('/user/account')
          .then(response => {
            for (let i = 0; i < response.data.data.length; i++) {
              if (response.data.data[i].type === 'S') {
                this.loanAccounts.push({
                  number: response.data.data[i].number,
                })
              } else if (response.data.data[i].type === 'C') {
                this.loanAccounts.push({
                  number: response.data.data[i].number,
                })
              }
            }
          })
          .catch(error => {
            this.$message.error(error.response.data.message);
          })
      },
      payLoan() {
        axios.post('/user/pay', this.paymentForm)
          .then(response => {
            this.$message.success(response.data.message);
          })
          .catch(error => {
            this.$message.error(error.response.data.message);
          })
      }
    }
  }
  </script>