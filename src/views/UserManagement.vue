<template>
  <div class="user-management">
    <h2>User Management</h2>
    <el-table :data="userList" border stripe>
      <el-table-column v-for="(value, key) in userList[0]" :key="key" :prop="key" :label="key">
      </el-table-column>
      <el-table-column label="Operations" width="180">
        <template slot-scope="scope">
          <el-button size="mini" @click="openEditDialog(scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="deleteUser(scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="Edit User" :visible.sync="editDialogVisible" width="30%">
      <el-form :model="editForm" label-width="100px">
        <el-form-item label="First Name">
          <el-input v-model="editForm.fname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Last Name">
          <el-input v-model="editForm.lname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="State">
          <el-input v-model="editForm.state" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="City">
          <el-input v-model="editForm.city" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Zip">
          <el-input v-model="editForm.zip" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Address">
          <el-input v-model="editForm.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="updateUser">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'UserManagement',
  data() {
    return {
      userList: [
        {
          id: 0,
          fname: '',
          lname: '',
          username: '',
          state: '',
          city: '',
          zip: '',
          address: ''
        }
      ],
      editDialogVisible: false,
      editForm: {
        fname: '',
        lname: '',
        state: '',
        city: '',
        zip: '',
        address: ''
      },
      currentUsername: ''
    };
  },
  mounted() {
    this.fetchUserList();
  },
  methods: {
    fetchUserList() {
      this.$axios.get('/admin/user')
        .then(response => {
          this.userList = response.data.data;
        })
        .catch(error => {
          this.$message.error(error.response.data.message);
          console.error('Failed to fetch user list', error);
        });
    },
    openEditDialog(user) {
      this.editDialogVisible = true;
      this.editForm = { ...user };
      this.currentUsername = user.username;
    },
    updateUser() {
      this.$axios.put(`/admin/user/${this.currentUsername}`, this.editForm)
        .then(response => {
          console.log(response);
          this.$message.success('User updated successfully');
          this.editDialogVisible = false;
          this.fetchUserList();
        })
        .catch(error => {
          this.$message.error(error.response.data.message);
          console.error('Failed to update user', error);
        });
    },
    deleteUser(user) {
      this.$axios.delete(`/admin/user/${user.username}`)
        .then(response => {
          console.log(response);
          this.$message.success('User deleted successfully');
          this.fetchUserList();
        })
        .catch(error => {
          this.$message.error(error.response.data.message);
          console.error('Failed to delete user', error);
        });
    }
  }
};
</script>