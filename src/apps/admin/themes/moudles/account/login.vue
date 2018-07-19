<template>
  <div style="height: 100%">
    <Row>
      <Col span="4">col-12</Col>
      <Col span="16" style="margin-top: 20%"><simple-login></simple-login></Col>
      <Col span="4">col-12</Col>
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
<style scoped>

</style>
