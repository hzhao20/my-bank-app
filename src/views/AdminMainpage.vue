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
          <el-menu-item index="4">
            <i class="el-icon-edit"></i>
            <span>Open Account</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-edit"></i>
            <span>Register</span>
          </el-menu-item>
          <el-menu-item index="logout" class="logout-item" @click="logout">
            <i class="el-icon-switch-button"></i>
            <span>Logout</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <UserManagement v-if="activeIndex === '1'"/>
        <AccountManagement v-if="activeIndex === '2'"/>
        <LoanManagement v-if="activeIndex === '3'"/>
        <AdminOpenAccount v-if="activeIndex === '4'"/>
        <AdminRegister v-if="activeIndex === '5'"/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import UserManagement from './UserManagement.vue';
import AccountManagement from './AccountManagement.vue';
import LoanManagement from './LoanManagement.vue';
import AdminOpenAccount from '@/views/AdminOpenAccount';
import AdminRegister from '@/views/AdminRegister';

export default {
  name: 'AdminMainPage',
  components: {
    UserManagement,
    AccountManagement,
    LoanManagement,
    AdminOpenAccount,
    AdminRegister
  },
  data() {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect(index) {
      this.activeIndex = index;
    },
    logout() {
      this.$axios.post('/logout')
        .then(response => {
          console.log(response);
          this.$message({
            message: 'Logout successful',
            type: 'success'
          });
          this.$router.push('/');
        })
        .catch(error => {
          console.log(error);
          this.$message.error('Logout failed');
        });
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

  .logout-item {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
}
</style>