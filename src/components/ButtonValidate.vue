<template>
  <Button :type="type">{{ buttonName }}</Button>
</template>

<script>
  import Base from '@/components/Base'
    export default {
        name: "ButtonValidate",
      'extends': Base,
      props:{
        buttonName:  {
          type: String,
          'default': ''
        },
        type: {
          type: String,
          'default': 'primary'
        }
      }
    }
</script>

<style scoped>

</style>
