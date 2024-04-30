<template>
  <div class="loan-management">
    <h2>Loan Management</h2>
    <el-table :data="loanList" border stripe>
      <el-table-column prop="number" label="Loan Number"></el-table-column>
      <el-table-column prop="type" label="Loan Type"></el-table-column>
      <el-table-column prop="original_amount" label="Original Amount"></el-table-column>
      <el-table-column prop="remaining_amount" label="Remaining Amount"></el-table-column>
      <el-table-column prop="remaining_months" label="Remaining Months"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'LoanManagement',
  data() {
    return {
      loanList: []
    };
  },
  mounted() {
    this.fetchLoanList();
  },
  methods: {
    fetchLoanList() {
      this.$axios.get('/admin/loan')
        .then(response => {
          this.loanList = response.data.data;
        })
        .catch(error => {
          console.error('Failed to fetch loan list', error);
        });
    }
  }
}
</script>

<style scoped>
.loan-management {
  padding: 20px;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.el-table {
  width: 100%;
}

.el-table th,
.el-table td {
  text-align: center;
}

.el-table th {
  background-color: #f5f7fa;
}
</style>