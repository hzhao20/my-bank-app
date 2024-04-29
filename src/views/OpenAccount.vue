<template>
  <div class="open-account">
    <h2>Open Account</h2>
    <el-form :model="accountForm" ref="accountForm" label-width="120px">
      <el-form-item label="Account Type">
        <el-radio-group v-model="accountForm.type">
          <el-radio label="C">Checking</el-radio>
          <el-radio label="S">Saving</el-radio>
          <el-radio label="L">Loan</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="First Name" prop="fname">
        <el-input v-model="accountForm.fname"></el-input>
      </el-form-item>
      <el-form-item label="Last Name" prop="lname">
        <el-input v-model="accountForm.lname"></el-input>
      </el-form-item>
      <el-form-item label="State" prop="state">
        <el-input v-model="accountForm.state"></el-input>
      </el-form-item>
      <el-form-item label="City" prop="city">
        <el-input v-model="accountForm.city"></el-input>
      </el-form-item>
      <el-form-item label="Zip" prop="zip">
        <el-input v-model="accountForm.zip"></el-input>
      </el-form-item>
      <el-form-item label="Address" prop="address">
        <el-input v-model="accountForm.address"></el-input>
      </el-form-item>

      <template v-if="accountForm.type === 'L'">
        <el-form-item label="Loan Type">
          <el-radio-group v-model="accountForm.loanType">
            <el-radio label="PERSONAL">Personal Loan</el-radio>
            <el-radio label="STUDENT">Student Loan</el-radio>
            <el-radio label="HOME">Home Loan</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="Amount" prop="amount">
          <el-input v-model.number="accountForm.amount"></el-input>
        </el-form-item>
        <el-form-item label="Months" prop="months">
          <el-input v-model.number="accountForm.months"></el-input>
        </el-form-item>

        <template v-if="accountForm.loanType === 'STUDENT'">
          <el-form-item label="University Name" prop="universityName">
            <el-input v-model="accountForm.universityName"></el-input>
          </el-form-item>
          <el-form-item label="Student ID" prop="studentID">
            <el-input v-model="accountForm.studentID"></el-input>
          </el-form-item>
          <el-form-item label="Expected Graduation Date" prop="expectGradDate">
            <el-date-picker
              v-model="accountForm.expectGradDate"
              type="date"
              placeholder="Select date"
              value-format="yyyy-MM-dd">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="Education Type" prop="educationType">
            <el-select v-model="accountForm.educationType" placeholder="Select education type">
              <el-option label="Undergraduate" value="U"></el-option>
              <el-option label="Graduate" value="G"></el-option>
            </el-select>
          </el-form-item>
        </template>

        <template v-if="accountForm.loanType === 'HOME'">
          <el-form-item label="House Build Year" prop="houseBuildYear">
            <el-input v-model="accountForm.houseBuildYear"></el-input>
          </el-form-item>
          <el-form-item label="Insurance Account Number" prop="insuranceAccNo">
            <el-input v-model.number="accountForm.insuranceAccNo"></el-input>
          </el-form-item>
          <el-form-item label="Insurance Company Name" prop="insuranceCompanyName">
            <el-input v-model="accountForm.insuranceCompanyName"></el-input>
          </el-form-item>
          <el-form-item label="Insurance Company State" prop="insuranceCompanyState">
            <el-input v-model="accountForm.insuranceCompanyState"></el-input>
          </el-form-item>
          <el-form-item label="Insurance Company City" prop="insuranceCompanyCity">
            <el-input v-model="accountForm.insuranceCompanyCity"></el-input>
          </el-form-item>
          <el-form-item label="Insurance Company Zip" prop="insuranceCompanyZip">
            <el-input v-model="accountForm.insuranceCompanyZip"></el-input>
          </el-form-item>
          <el-form-item label="Insurance Company Address" prop="insuranceCompanyAddress">
            <el-input v-model="accountForm.insuranceCompanyAddress"></el-input>
          </el-form-item>
          <el-form-item label="Insurance Company Premium" prop="insuranceCompanyPremium">
            <el-input v-model.number="accountForm.insuranceCompanyPremium"></el-input>
          </el-form-item>
        </template>
      </template>

      <el-form-item>
        <el-button type="primary" @click="openAccount">Open Account</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'OpenAccount',
  data() {
    return {
      accountForm: {
        fname: '',
        lname: '',
        state: '',
        city: '',
        zip: '',
        address: '',
        type: '',
        amount: 0,
        months: 0,
        loanType: '',
        universityName: '',
        studentID: '',
        expectGradDate: '',
        educationType: '',
        houseBuildYear: '',
        insuranceAccNo: 0,
        insuranceCompanyName: '',
        insuranceCompanyState: '',
        insuranceCompanyCity: '',
        insuranceCompanyZip: '',
        insuranceCompanyAddress: '',
        insuranceCompanyPremium: 0
      }
    };
  },
  methods: {
    openAccount() {
      // 首先，根据账户类型准备请求数据
      let requestData = {
        fname: this.accountForm.fname,
        lname: this.accountForm.lname,
        state: this.accountForm.state,
        city: this.accountForm.city,
        zip: this.accountForm.zip,
        address: this.accountForm.address,
        type: this.accountForm.type
      };

      // 如果是贷款账户，添加额外的字段
      if (this.accountForm.type === 'L') {
        requestData.amount = this.accountForm.amount;
        requestData.months = this.accountForm.months;
        requestData.loanType = this.accountForm.loanType;

        if (this.accountForm.loanType === 'STUDENT') {
          requestData.universityName = this.accountForm.universityName;
          requestData.studentID = this.accountForm.studentID;
          requestData.expectGradDate = this.accountForm.expectGradDate;
          requestData.educationType = this.accountForm.educationType;
        } else if (this.accountForm.loanType === 'HOME') {
          requestData.houseBuildYear = this.accountForm.houseBuildYear;
          requestData.insuranceAccNo = this.accountForm.insuranceAccNo;
          requestData.insuranceCompanyName = this.accountForm.insuranceCompanyName;
          requestData.insuranceCompanyState = this.accountForm.insuranceCompanyState;
          requestData.insuranceCompanyCity = this.accountForm.insuranceCompanyCity;
          requestData.insuranceCompanyZip = this.accountForm.insuranceCompanyZip;
          requestData.insuranceCompanyAddress = this.accountForm.insuranceCompanyAddress;
          requestData.insuranceCompanyPremium = this.accountForm.insuranceCompanyPremium;
        }
      }

      // 发送POST请求到后端API
      this.$axios.post('/user/open', requestData)
        .then(response => {
          // 处理成功响应
          console.log(response.data);
          this.$message({
            message: 'Account opened successfully',
            type: 'success'
          });
          // 可以在这里添加其他的逻辑，如重置表单、跳转到其他页面等
        })
        .catch(error => {
          // 处理错误响应
          console.log(error);
          this.$message.error(error.response.data.message);
        });
    }
  }
};
</script>