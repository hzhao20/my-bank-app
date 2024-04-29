<template>
    <div class="checking-account">
      <h2>Checking Account</h2>
      <el-descriptions title="Account Details" :column="2" border>
        <el-descriptions-item label="Account Number">{{ checkingAccount.number }}</el-descriptions-item>
        <el-descriptions-item label="Balance">{{ checkingAccount.balance }}</el-descriptions-item>
      </el-descriptions>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CheckingAccount',
    data() {
      return {
        checkingAccount: {
            number: '',
            balance: 0
        }
      }
    },
    mounted() {
      this.fetchCheckingAccount()
      this.fetchChecingBalance()
    },
    methods: {
        fetchChecingBalance() {
            this.$axios.get('/user/balance')
                .then(response => {
                    this.checkingAccount.balance = response.data.data[0];
                })
                .catch(error => {
                    console.error(error);
                });
        },
      fetchCheckingAccount() {
        this.$axios.get('/user/account')
            .then(response => {
                for(let i = 0; i < response.data.data.length; i++){
                    if(response.data.data[i].type === 'C'){

                        this.checkingAccount.number = response.data.data[i].number;
                    }
                }
            })
            .catch(error => {
                console.error(error);
            });
      }
    }
  }
  </script>