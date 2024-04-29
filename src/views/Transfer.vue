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
  import axios from 'axios';
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
      transfer() {
        this.transferForm.to_account_number = parseInt(this.transferForm.to_account_number, 10);
        axios.put('/user/transfer', this.transferForm)
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