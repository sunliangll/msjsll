<script>
    export default {
      name: "index",
      data () {
        return {
          userInfo:''
        }
      },
      created(){
        this.__checkAuth()
      },
      methods:{
        __checkAuth(){
            let loginStatus = this.$store.getters['account/loginStatus'];
            if(loginStatus === 4){
                this.userInfo = userInfo;
            }else{
              this.$router.push({ path: '/Login' })
            }
        }
      }
    }
</script>
