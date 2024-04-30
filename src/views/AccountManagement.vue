<template>
  <div class="account-management">
    <h2>Account Management</h2>
    <el-form :inline="true" :model="searchForm" class="demo-form-inline">
      <el-form-item label="Account Type">
        <el-select v-model="searchForm.type" placeholder="Account Type" @change="onAccountTypeChange">
          <el-option label="Checking" value="C"></el-option>
          <el-option label="Saving" value="S"></el-option>
          <el-option label="Loan" value="L"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item v-if="searchForm.type === 'L'" label="Loan Type">
        <el-select v-model="searchForm.loanType" placeholder="Loan Type">
          <el-option label="Home Loan" value="homeLoan"></el-option>
          <el-option label="Student Loan" value="studentLoan"></el-option>
          <el-option label="Personal Loan" value="personalLoan"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="fetchAccountsByType">Search</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="accountList" border stripe>
      <el-table-column prop="number" label="Account Number">
        <template slot-scope="scope">
          <el-button type="text" @click="openAccountDialog(scope.row)">{{ scope.row.number }}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="fname" label="First Name"></el-table-column>
      <el-table-column prop="lname" label="Last Name"></el-table-column>
      <el-table-column prop="state" label="State"></el-table-column>
      <el-table-column prop="city" label="City"></el-table-column>
      <el-table-column prop="zip" label="Zip"></el-table-column>
      <el-table-column prop="address" label="Address"></el-table-column>
      <el-table-column v-if="searchForm.type === 'L' && searchForm.loanType === 'studentLoan'" prop="universityName" label="University Name"></el-table-column>
      <el-table-column v-if="searchForm.type === 'L' && searchForm.loanType === 'studentLoan'" prop="studentID" label="Student ID"></el-table-column>
      <el-table-column v-if="searchForm.type === 'L' && searchForm.loanType === 'studentLoan'" prop="educationType" label="Education Type"></el-table-column>
      <el-table-column v-if="searchForm.type === 'L' && searchForm.loanType === 'studentLoan'" prop="expectGradDate" label="Expected Graduation Date"></el-table-column>
      <el-table-column v-if="searchForm.type === 'L' && searchForm.loanType === 'homeLoan'" prop="houseBuildYear" label="House Build Year"></el-table-column>
      <el-table-column v-if="searchForm.type === 'L' && searchForm.loanType === 'homeLoan'" prop="insuranceAccNo" label="Insurance Account Number"></el-table-column>
      <el-table-column v-if="searchForm.type === 'L' && searchForm.loanType === 'homeLoan'" prop="insuranceCompanyName" label="Insurance Company Name"></el-table-column>
      <el-table-column label="Operations" width="200">
        <template slot-scope="scope">
          <el-button v-if="scope.row.type === 'C' || scope.row.type === 'S'" size="mini" @click="openBalanceDialog(scope.row)">Set Balance</el-button>
          <el-button size="mini" type="danger" @click="deleteAccount(scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="dialogTitle" :visible.sync="accountDialogVisible" width="30%">
      <el-descriptions :column="2" border>
        <el-descriptions-item v-for="(value, key) in currentAccount" :key="key" :label="key">
          {{ value }}
        </el-descriptions-item>
      </el-descriptions>
    </el-dialog>

    <el-dialog title="Set Balance" :visible.sync="balanceDialogVisible" width="30%">
      <el-form :model="balanceForm">
        <el-form-item label="Balance" label-width="120px">
          <el-input v-model="balanceForm.balance" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="balanceDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="updateBalance">Confirm</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'AccountManagement',
  data() {
    return {
      searchForm: {
        type: '',
        loanType: ''
      },
      accountList: [],
      accountDialogVisible: false,
      currentAccount: {},
      dialogTitle: '',
      balanceDialogVisible: false,
      balanceForm: {
        balance: 0,
        account: 0
      }
    };
  },
  methods: {
    onAccountTypeChange() {
      this.searchForm.loanType = '';
    },
    fetchAccountsByType() {
      if (this.searchForm.type === 'L' && this.searchForm.loanType) {
        this.$axios.get(`/admin/account?type=${this.searchForm.type}`)
          .then(response => {
            this.accountList = response.data.data[this.searchForm.loanType];
          })
          .catch(error => {
            console.error('Failed to fetch loan accounts', error);
          });
      } else {
        this.$axios.get(`/admin/account?type=${this.searchForm.type}`)
          .then(response => {
            this.accountList = response.data.data;
          })
          .catch(error => {
            console.error('Failed to fetch accounts', error);
          });
      }
    },
    deleteAccount(account) {
      this.$axios.delete(`/admin/account/${account.number}`)
        .then(response => {
          console.log('Account deleted successfully', response);
          this.$message.success('Account deleted successfully');
          this.fetchAccountsByType();
        })
        .catch(error => {
          console.error('Failed to delete account', error);
        });
    },
    openAccountDialog(account) {
      this.currentAccount = account;
      this.dialogTitle = `Account Details: ${account.number}`;
      this.accountDialogVisible = true;
    },
    openBalanceDialog(account) {
      this.balanceForm.account = account.number;
      this.balanceDialogVisible = true;
    },
    updateBalance() {
      const balanceAsFloat = parseFloat(this.balanceForm.balance);
      this.balanceForm.balance = balanceAsFloat;
      this.$axios.put('/admin/balance', this.balanceForm)
        .then(response => {
          console.log('Balance updated successfully', response);
          this.$message.success('Balance updated successfully');
          this.balanceDialogVisible = false;
          this.fetchAccountsByType();
        })
        .catch(error => {
          console.error('Failed to update balance', error);
        });
    }
  }
};
</script>