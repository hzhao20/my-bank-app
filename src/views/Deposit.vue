<template>
    <div class="deposit">
      <h2>Deposit</h2>
      <el-form :model="depositForm" ref="depositForm" label-width="120px">
        <el-form-item label="Account">
          <el-select v-model="depositForm.account" placeholder="Select account">
            <el-option v-for="account in accounts" :key="account.number" :label="account.number" :value="account.number"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Amount">
          <el-input v-model.number="depositForm.balance"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="deposit">Deposit</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script>
import axios from 'axios';

  export default {
    name: 'DepositM',
    data() {
      return {
        depositForm: {
          account: '',
          balance: 0
        },
        accounts: []
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
                this.accounts.push({
                  number: response.data.data[i].number,
                })
              } else if (response.data.data[i].type === 'C') {
                this.accounts.push({
                  number: response.data.data[i].number,
                })
              }
            }
          })
          .catch(error => {
            this.$message.error(error.response.data.message);
          })
      },
      deposit() {
        axios.put('/user/deposit', this.depositForm)
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