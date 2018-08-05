<script>
  import Base from '@/components/Base'
  import * as types from '../store/modules/account/mutation-types';
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: "simpleLogin",
    'extends': Base,
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      getUserNameVal(username_val){
        this.username = username_val ;
      },
    getPasswordVal(password_val){
        this.password = password_val ;
      },
      toLogin() {
        if(this.username === '' || this.password === ''){
          this.$Notice.error({
            title: 'error',
            desc: '用户及密码不能为空，请填写相关信息！'
          });
        }else if (!this.$refs.userRef.valueErrorState  &&  !this.$refs.passRef.valueErrorState) {
          this.$store.dispatch('account/' + [types.A_LOGIN], {accountName: this.username, password: this.password})
        } else {
          this.$Notice.error({
            title: 'error',
            desc: '用户及密码格式不正确，请再次确认相关信息！'
          });
        }
      }
    }
  }
</script>
