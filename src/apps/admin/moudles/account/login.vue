<script>
  import Base from '@/components/Base'

  export default {
    name: "login",
    'extends': Base,
    data() {
      return {
      }
    },
    mounted(){
      this.__checkAuth()
    },
    methods:{
      __checkAuth(){
        let loginStatus = this.$store.getters['account/loginStatus'];
        if(loginStatus === 4){
          this.$router.push({ path: '/Admin' })
        }else{
        }
      }
    }
  }
</script>
