<template>
  <div class="login">
    <div class="l-form">
      <div class="l-tip">图书馆管理系统</div>
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import login from "@/api/login";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  data() {
    return {
      form: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      login.submit(this.form).then(res => {
        if (res.data.status === 1) {
          // 将用户信息存储在vuex中
          this.$store.commit('loginIn', this.form.name)
          this.$router.push("/index");
        } else {
          this.$message({
            message: res.data.message,
            type: 'error',
            duration: 5000
          })
        }
      }).catch(Error => {
        this.$message({
          message: Error,
          type: 'error',
          duration: 5000
        })
      })

    },
  },
}
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background: #000;

  .l-form {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    width: 300px;
    margin: auto;
    border-radius: 8px;
    background: #fff;
    padding: 20px;

    .l-tip {
      text-align: center;
      font-size: 24px;
      font-weight: bold;
    }

    .el-form {
      width: 100%;
      margin: auto;
      margin-top: 20px;

      .el-form-item {
        button {
          width: 100%;
        }
      }
    }
  }
}

.is-danger input {
  border-color: #ff3860;
}
</style>

