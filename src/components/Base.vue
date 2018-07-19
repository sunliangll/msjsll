<script>
    export default {
        name: "Base",
        data(){
          return {
            cssPrefix: 'msj-sll-'
          }
        },
        methods: {
          set_cookie(name, value, clearTime = 3600000) {//60 * 60 * 1000 1小时
            let exp = new Date();
            exp.setTime(exp.getTime() + clearTime);
            document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
          },
          //读取cookies
          get_cookie(name) {
            let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
              return unescape(arr[2]);
            else
              return null;
            },
          //删除cookies
          del_cookie(name) {
            var exp = new Date();
            exp.setTime(exp.getTime() - 60 * 60 * 1000);
            var cval = this.get_cookie(name);
            if (cval != null)
              document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + ";path=/";
          }

        }
    }
</script>


