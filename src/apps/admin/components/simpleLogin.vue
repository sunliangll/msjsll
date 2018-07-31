<script>
  import Base from '@/components/Base'

  export default {
    name: "simpleLogin",
    'extends': Base,
    data(){
      return {
        username: '',
        inputStatus:true,
      }
    },
    methods: {
      getContent (value){
        this.username = value;
      },
      getState(state){
        this.inputStatus = state;
      },
      toLogin (){
        if(this.inputStatus){

        }else{
          console.log(this.username);
        }
      }
    }
  }
</script>
