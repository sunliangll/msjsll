<template>
  <div>

    <header :class="cssPrefix + 'blog_inx_header'">
        <nav-tool :class="cssPrefix + 'blog_inx_nav_tool'"></nav-tool>
    </header>
    <section :class="cssPrefix + 'blog_inx_sec'">
      a<br/>
      a<br/>
      a<br/>
      a<br/>
      a<br/>
      a<br/>
      a<br/>
      a<br/>
      a<br/>
      a<br/>
      a<br/>
      a<br/>
      a<br/>
      a<br/>
      a<br/>
      a<br/>
      a<br/>
      a<br/>
      a<br/>
      a<br/>
      a<br/>
      a<br/>
      a<br/>
      a<br/>
      a<br/>
      a<br/>
      a<br/>
      a<br/>
      a<br/>
      a<br/>
    </section>
   </div>

</template>

<script>
  import NavTool from '@/apps/console/themes/components/MobileNavTool.vue'
  import Index from '@/apps/console/moudles/Blogger/index'

  export default {
    name: "index",
    'extends': Index,
    components: {
      NavTool
    }
  }
</script>

<style lang="scss">
  @import "../../../../../themes/config/_variables";
  .#{$prefix}blog_inx_header{
    height: 100%;
    position: fixed;
    top:0;
    width: 100%;
  }
  .#{$prefix}blog_inx_nav_tool {
    text-align: left;
    z-index: 999;
  }
  .#{$prefix}blog_inx_sec{
    margin-top: 25%;
  }
</style>
