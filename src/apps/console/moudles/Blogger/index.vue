<script>
  import Base from '@/components/Base'

  export default {
    name: "index",
    'extends': Base,
    data(){
      return{
        show: false,
      }
    },
    mounted(){
      this.set_cookie('route',this.$route.path);
    }
  }
</script>

