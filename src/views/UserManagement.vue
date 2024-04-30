<template>
    <div class="user-management">
      <h2>User Management</h2>
      <el-table :data="userList" border stripe>
        <el-table-column prop="id" label="ID" width="50"></el-table-column>
        <el-table-column prop="fname" label="First Name" width="100"></el-table-column>
        <el-table-column prop="lname" label="Last Name" width="100"></el-table-column>
        <el-table-column prop="username" label="Username" width="120"></el-table-column>
        <el-table-column prop="state" label="State" width="80"></el-table-column>
        <el-table-column prop="city" label="City" width="100"></el-table-column>
        <el-table-column prop="zip" label="Zip" width="80"></el-table-column>
        <el-table-column prop="address" label="Address"></el-table-column>
        <el-table-column label="Operations" width="150">
          <template slot-scope="scope">
            <el-button size="mini" @click="editUser(scope.row)">Edit</el-button>
            <el-button size="mini" type="danger" @click="deleteUser(scope.row)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserManagement',
    data() {
      return {
        userList: []
      };
    },
    created() {
    //   this.fetchUserList();
    },
    methods: {
    //   fetchUserList() {
        // this.$axios.get('/admin/user')
        //   .then(response => {
        //     this.userList = response.data.data;
        //   })
        //   .catch(error => {
        //     console.error('Failed to fetch user list', error);
        //   });
      },
    //   editUser(user) {
        // // TODO: Implement edit user
        // this.$router.push(`/edit-user/${user.id}`);

    //   },
    //   deleteUser(user) {
        // this.$axios.delete(`/admin/user/${user.username}`)
        //   .then(response => {
        //     this.$message.success('User deleted successfully');
        //     this.fetchUserList();
        //   })
        //   .catch(error => {
        //     console.error('Failed to delete user', error);
        //   });
      
    // }
  }
  </script>