<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Base from '../src/components/Base'
export default {
  name: 'App',
  'extends': Base,
  data(){
    return{}
  }/*,
  mounted(){
    this.browser_redirect();
  },
  methods: {
    browser_redirect() {
      let sUserAgent = navigator.userAgent.toLowerCase();
      let bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
      let bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
      let bIsMidp = sUserAgent.match(/midp/i) == "midp";
      let bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
      let bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
      let bIsAndroid = sUserAgent.match(/android/i) == "android";
      let bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
      let bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
      if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        //跳转移动端页面
        if(this.get_cookie('route')){
          this.$router.push({ path: this.get_cookie('route') })
        }else{
          this.$router.push({ path: '/' })
        }
      } else {
        //跳转pc端页面
        this.$router.push({ path: '/pc_index' })
      }
    }
  }*/

}
</script>

<style>
  html{color:#000;background:#FFF;height:100%;width: 100%}
  body{
    margin:0;
    padding:0;
    height:100%
  }
  table {
    border-collapse:collapse;
    border-spacing:0;
  }
  fieldset,img {
    border:0;
  }
  address,caption,cite,code,dfn,em,strong,th,var {
    font-style:normal;
    font-weight:normal;
  }
  ol,ul {
    list-style:none;
  }
  caption,th {
    text-align:left;
  }
  h1,h2,h3,h4,h5,h6 {
    font-size:100%;
    font-weight:normal;
  }
  q:before,q:after {
    content:'';
  }
  abbr,acronym { border:0;
  }
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
    width: 100%;
}
</style>
