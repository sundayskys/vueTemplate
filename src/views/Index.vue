<template>
  <div class="login">
    <div class="l-form">
      <div class="l-tip">用户:{{ username }}</div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Index',
  data() {
    return {
      form: {
        name: '',
        password: ''
      }
    }
  },
  computed: {
    username(){
      return this.$store.state.name
    }
  },
  methods: {
    onSubmit() {

    },
  },
}
</script>
<style lang="scss">
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
  }
}
</style>



