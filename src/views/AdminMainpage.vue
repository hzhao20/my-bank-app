<template>
    <div class="admin-main-page">
      <el-container>
        <el-aside width="200px">
          <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" @select="handleSelect">
            <el-menu-item index="1">
              <i class="el-icon-user"></i>
              <span>User Management</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-bank-card"></i>
              <span>Account Management</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-money"></i>
              <span>Loan Management</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <UserManagement v-if="activeIndex === '1'"/>
          <AccountManagement v-if="activeIndex === '2'"/>
          <LoanManagement v-if="activeIndex === '3'"/>
        </el-main>
      </el-container>
    </div>
  </template>
  
  <script>
  import UserManagement from './UserManagement.vue';
  import AccountManagement from './AccountManagement.vue';
  import LoanManagement from './LoanManagement.vue';
  
  export default {
    name: 'AdminMainPage',
    components: {
      UserManagement,
      AccountManagement,
      LoanManagement
    },
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(index) {
        this.activeIndex = index;
      }
    }
  };
  </script>
  
  <style lang="less" scoped>
  .admin-main-page {
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