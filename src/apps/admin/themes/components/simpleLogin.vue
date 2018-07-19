<template>
  <div>
    <input-validate></input-validate><br/><br/>
    <input-validate></input-validate><br/><br/>
    <button-validate buttonName="登录" type="primary"></button-validate>
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
