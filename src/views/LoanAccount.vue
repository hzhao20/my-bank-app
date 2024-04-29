<template>
    <div class="loan-account">
      <h2>Loan Account</h2>
      <el-table :data="loanAccounts" stripe style="width: 100%">
        <el-table-column prop="number" label="Account Number" width="180"></el-table-column>
        <el-table-column prop="type" label="Loan Type" width="120"></el-table-column>
        <el-table-column prop="amount" label="Loan Amount"></el-table-column>
        <el-table-column label="Interest Rate">5%</el-table-column>
        <el-table-column prop="months" label="Loan Period (Months)"></el-table-column>
        <el-table-column prop="payment" label="Monthly Payment"></el-table-column>
      </el-table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoanAccount',
    data() {
      return {
        loanAccounts: {
            number: '',
            type: '',
            amount: 0,
            months: 0,
            payment: 0

        }
      }
    },
    created() {
      this.fetchLoanAccounts()
    },
    methods: {
      fetchLoanAccounts() {
        this.$axios.get('/user/loan')
            .then(response => {
            
                this.loanAccounts = response.data.data;
            })
            .catch(error => {
                this.$message.error(error.response.data.message);
            });
        // 在这里添加从后端API获取贷款账户数据的逻辑
        // 可以使用this.$axios.get('/user/loan')获取贷款账户数据
        // 然后将响应数据赋值给this.loanAccounts
      }
    }
  }
  </script>