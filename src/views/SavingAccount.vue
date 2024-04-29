<template>
    <div class="saving-account">
      <h2>Saving Account</h2>
      <el-descriptions title="Account Details" :column="2" border>
        <el-descriptions-item label="Account Number">{{ savingAccount.number }}</el-descriptions-item>
        <el-descriptions-item label="Balance">{{ savingAccount.balance }}</el-descriptions-item>
        <el-descriptions-item label="Interest Rate">5%</el-descriptions-item>
      </el-descriptions>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SavingAccount',
    data() {
      return {
        savingAccount: {
            number: '',
            balance: 0
        }
      }
    },
    mounted() {
      this.fetchSavingAccount()
      this.fetchSavingBalance()
    },
    methods: {
        fetchSavingAccount() {
        this.$axios.get('/user/account')
            .then(response => {
                for(let i = 0; i < response.data.data.length; i++){
                    if(response.data.data[i].type === 'S'){
                        this.savingAccount.number = response.data.data[i].number;
                    }
                }
            })
            .catch(error => {
                console.error(error);
            });
      },
        fetchSavingBalance() {
        this.$axios.get('/user/balance')
                .then(response => {
                    this.savingAccount.balance = response.data.data[1];
                })
                .catch(error => {
                    console.error(error);
                });
      }
    }
  }
  </script>