<template>
  <section>
    <nav></nav>
    <div class="msj-sll-content">
      <pre>M</pre>
      <div class="msj-sll-content-app">
        <table>
          <tbody>
            <tr>
              <td><img src="/static/home/icon/blogger.png"/></td>
              <td><img src="/static/home/icon/github.png"/></td>
              <td><img src="/static/home/icon/google.png"/></td>
            </tr>
            <tr>
              <td><img src="/static/home/icon/wechat.png"/></td>
              <td><img src="/static/home/icon/weibo.png"/></td>
              <td><router-link to="/tool"><img src="/static/home/icon/tool.png"/></router-link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <canvas class="canvas"></canvas>
  </section>
</template>

<script>
    import Index from '@/apps/console/moudles/Home/Index.vue';
    export default {
      'extends': Index,
        name: "index"
    }
</script>

<style scoped lang="scss">
  @import "../../../../../themes/config/_variables.scss";
  $remLen : 5rem;
  section{
    width: 100%;
    margin: 0 auto;
  }
  .msj-sll-content{
    color: black;
    position: relative;
    top: $remLen / 2;
    left: 0;
  }
  .msj-sll-content > pre{
    font-size: $remLen;
    font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
  }
  .canvas{
    width: 100%;
  }
  .msj-sll-content-app  table{
    width: 100%;
    margin-top: $remLen / 10;
    border-collapse:separate; border-spacing:0 $remLen;
    img{
      width: $remLen / 2
    ;
    }
  }
</style>
