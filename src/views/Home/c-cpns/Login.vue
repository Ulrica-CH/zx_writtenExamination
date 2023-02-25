<template>
  <div class="login-form">
    <el-form :model="form" :rules="loginRules" ref="loginForm">
      <el-form-item prop="userName">
        <el-input
          type="text"
          v-model="form.userName"
          auto-complete="off"
          placeholder="请输入用户名"
        >
          <template slot="prepend"
            ><i style="font-size: 20px" class="el-icon-user"></i
          ></template>
        </el-input>
      </el-form-item>
      <el-form-item prop="passWord">
        <el-input
          type="text"
          v-model="form.passWord"
          auto-complete="off"
          placeholder="请输入密码"
        >
          <template slot="prepend"
            ><i style="font-size: 20px" class="el-icon-key"></i
          ></template>
        </el-input>
      </el-form-item>
      <el-form-item
        ><el-checkbox v-model="checked">记住密码</el-checkbox></el-form-item
      >
      <el-form-item>
        <el-button
          style="width: 100%"
          type="success"
          @click="handleLogin"
          :loading="loading"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loading: false,
      checked: false,
      // 字段
      form: {
        userName: "",
        passWord: "",
      },
      // 校验
      loginRules: {
        userName: [{ required: true, message: "请输入账户", trigger: "blur" }],
        passWord: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    savePassword() {},
    handleLogin() {
      // 记住密码逻辑
      if (this.checked) {
        //加密
        //存储 localStorange
      }
      this.$refs.loginForm
        .validate()
        .then((res) => {
          // this.loading = true;
          //axios 调用
          // axios.get()
        })
        .catch((e) => {
          this.$message({
            message: "输入错误！",
            type: "warning",
          });
        });
    },
  },
};
</script>

<style scoped lang="less"></style>
