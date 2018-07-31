<template>
  <div>
    <input-validate placeholder="账号" @postVal="getContent" @postState="getState"> </input-validate><br/><br/>
    <input-validate placeholder="密码" type="password"></input-validate><br/><br/>
    <!--<button-validate buttonName="登录" type="primary" ></button-validate>-->
    <button type="primary"  @click="toLogin()">登录</button>
  </div>
</template>

<style scoped>

</style>
<script>
  import simpleLogin from '@/apps/admin/components/simpleLogin'
  import InputValidate from '@/components/InputValidate'
import ButtonValidate from '@/components/ButtonValidate'
  export default {
    name: "simpleLogin",
    'extends': simpleLogin,
    components: {
      InputValidate,
      ButtonValidate
    }
  }
</script>
