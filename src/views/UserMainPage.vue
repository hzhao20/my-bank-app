<template>
    <div class="user-main-page">
      <el-container>
        <el-aside width="200px">
          <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" @select="handleSelect">
            <el-menu-item index="1">
              <i class="el-icon-user"></i>
              <span>Personal Information</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-bank-card"></i>
                <span>Accounts</span>
              </template>
              <el-menu-item index="2-1">Saving</el-menu-item>
              <el-menu-item index="2-2">Checking</el-menu-item>
              <el-menu-item index="2-3">Loan</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">
              <i class="el-icon-plus"></i>
              <span>Open Account</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-money"></i>
              <span>Deposit</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-s-finance"></i>
              <span>Transfer</span>
            </el-menu-item>
            <el-menu-item index="6">
              <i class="el-icon-coin"></i>
              <span>Pay Loan</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <!-- 在这里添加主要内容 -->
          <PersonalInfo v-if="activeIndex === '1'"/>
          <SavingAccount v-if="activeIndex === '2-1'"/>
          <CheckingAccount v-if="activeIndex === '2-2'"/>
          <LoanAccount v-if="activeIndex === '2-3'"/>
          <OpenAccount v-if="activeIndex === '3'"/>
          <Deposit v-if="activeIndex === '4'"/>
          <Transfer v-if="activeIndex === '5'"/>
          <PayLoan v-if="activeIndex === '6'"/>
        </el-main>
      </el-container>
    </div>
  </template>
  
  <script>
  import SavingAccount from '@/views/SavingAccount.vue';
  import CheckingAccount from '@/views/CheckingAccount.vue';
  import LoanAccount from './LoanAccount.vue';
  import PersonalInfo from './PersonalInfo.vue';
  import OpenAccount from './OpenAccount.vue';
  import Deposit from './Deposit.vue';
  import Transfer from './Transfer.vue';
  import PayLoan from './PayLoan.vue';
  export default {
    name: 'UserMainPage',
    components: {
    PersonalInfo,
    SavingAccount,
    CheckingAccount,
    LoanAccount,
    OpenAccount,
    Deposit,
    Transfer,
    PayLoan
  },
    data() {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      handleSelect(index) {
        this.activeIndex = index
        // TODO: 处理菜单项选择的逻辑
        console.log(this.activeIndex)
      }
    }
  }
  </script>
  
  <style lang="less" scoped>
  .user-main-page {
    .el-container {
      height: 100vh;
    }
    
    .el-aside {
      background-color: #D3DCE6;
      color: #333;
    }
    
    .el-main {
      background-color: #E9EEF3;
      color: #333;
    }
    
    .el-menu-vertical-demo {
      height: 100%;
    }
  }
  </style>