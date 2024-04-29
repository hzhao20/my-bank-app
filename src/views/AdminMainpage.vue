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
          <router-view></router-view>
        </el-main>
      </el-container>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminMainPage',
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(index) {
        this.activeIndex = index;
        switch (index) {
          case '1':
            this.$router.push('/admin/user');
            break;
          case '2':
            this.$router.push('/admin/account');
            break;
          case '3':
            this.$router.push('/admin/loan');
            break;
          default:
            break;
        }
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
  