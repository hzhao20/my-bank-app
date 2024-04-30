<template>
    <div class="account-management">
      <h2>Account Management</h2>
      <el-form :inline="true" :model="searchForm" class="demo-form-inline">
        <el-form-item label="Account Type">
          <el-select v-model="searchForm.type" placeholder="Account Type">
            <el-option label="Checking" value="C"></el-option>
            <el-option label="Saving" value="S"></el-option>
            <el-option label="Loan" value="L"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="fetchAccountsByType">Search</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="accountList" border stripe>
        <el-table-column prop="number" label="Account Number"></el-table-column>
        <el-table-column prop="fname" label="First Name"></el-table-column>
        <el-table-column prop="lname" label="Last Name"></el-table-column>
        <el-table-column prop="state" label="State"></el-table-column>
        <el-table-column prop="city" label="City"></el-table-column>
        <el-table-column prop="zip" label="Zip"></el-table-column>
        <el-table-column prop="address" label="Address"></el-table-column>
        <el-table-column label="Operations" width="150">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="deleteAccount(scope.row)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AccountManagement',
    data() {
      return {
        searchForm: {
          type: ''
        },
        accountList: []
      };
    },
    methods: {
    //   fetchAccountsByType() {
    //     this.$axios.get(`/admin/account?type=${this.searchForm.type}`)
    //       .then(response => {
    //         this.accountList = response.data.data;
    //       })
    //       .catch(error => {
    //         console.error('Failed to fetch accounts', error);
    //       });
    //   },
    //   deleteAccount(account) {
    //     this.$axios.delete(`/admin/account/${account.number}`)
    //       .then(response => {
    //         this.$message.success('Account deleted successfully');
    //         this.fetchAccountsByType();
    //       })
    //       .catch(error => {
    //         console.error('Failed to delete account', error);
    //       });
    //   }
    }
  }
  </script>