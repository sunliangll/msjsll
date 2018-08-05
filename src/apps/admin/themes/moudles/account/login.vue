<template>
  <div :class="cssPrefix + 'admin_login_div'">
    <Row type="flex" justify="end">
      <Col span="16" style="margin-top: 20%;margin-right: 5%">
        <simple-login></simple-login>
      </Col>
    </Row>
  </div>
</template>
<script>
  import Login from '@/apps/admin/moudles/account/login'
  import simpleLogin from '@/apps/admin/themes/components/simpleLogin'
  export default {
    name: "login",
    'extends': Login,
    components:{
      simpleLogin
    }
  }
</script>
<style lang="scss">
  @import "../../../../../themes/config/_variables";
  .#{$prefix}admin_login_div{
    height: 100%;
    background-image: url('https://file.iviewui.com/iview-admin/login_bg.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
  }
</style>
