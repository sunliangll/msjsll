<template>
  <div :class="cssPrefix + 'simple-login_div'">
    <div  :class="cssPrefix + 'simple-login_herder_input'" >

      <h2>M</h2>
    </div>
    <input-validate :class="cssPrefix + 'simple-login_user_input'" placeholder="账号" v-on:setVal="getUserNameVal"  ref="userRef" v-model="username"> </input-validate><br/><br/>
    <input-validate :class="cssPrefix + 'simple-login_pass_input'" placeholder="密码" v-on:setVal="getPasswordVal"  type="password" v-model="password" ref="passRef"></input-validate><br/><br/>
    <Button :class="cssPrefix + 'simple-login_button'" type="primary"  @click="toLogin()">登录</Button>
  </div>
</template>

<style lang="scss">
  @import "../../../../themes/config/_variables";
  .#{$prefix}simple-login_herder_input{
    width: 20%;
    margin: auto 0 auto auto;
    font-size: 3rem;
    color: white;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }

  .#{$prefix}simple-login_div{
    width: $global_width;
    height: $global_height;
  }
    .#{$prefix}simple-login_user_input{
      width: $global_width / 5;
      margin: auto 0 auto auto;
    }
  .#{$prefix}simple-login_pass_input{
    width: $global_width / 5;
    margin: auto 0 auto auto;
  }
  .#{$prefix}simple-login_button{
    display: block;
    width: $global_width / 5;
    margin: auto 0 auto auto;
  }
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
