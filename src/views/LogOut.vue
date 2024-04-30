<!-- <template>
    <div>
      <span @click="logout">Logout</span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LogOut',
    methods: {
      logout() {
        this.$axios.post('/logout')
          .then(response => {
            console.log(response);
            this.$message({
              message: 'Logout successful',
              type: 'success'
            });
            this.$router.push('/login');
          })
          .catch(error => {
            console.log(error);
            this.$message.error('Logout failed');
          });
      }
    }
  }
  </script>
  
  <style scoped>
  span {
    cursor: pointer;
  }
  </style> -->