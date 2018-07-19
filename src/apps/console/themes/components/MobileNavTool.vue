<template>
  <div :class="cssPrefix + 'nav_tool_div'">
    <transition name="fade">
      <section v-show="!menuStatus" :class="cssPrefix + 'nav_tool_section'">
        <p @click="changeMenu(false)">关闭</p>
      </section>
    </transition>
    <nav :class="cssPrefix + 'nav_tool_nav'" v-if="menuStatus">
      <img src="../../../../../static/blogger/nav.png" @click="changeMenu(true)"/>
    </nav>
  </div>
</template>

<script>
  import MobileNavTool from '@/apps/console/components/MobileNavTool'

  export default {
    name: "MobileNavTool",
    'extends': MobileNavTool
  }
</script>
<style lang="scss">
  @import "../../../../themes/config/_variables";

  .#{$prefix}nav_tool_div {
    height: 100%;
  }

  .#{$prefix}nav_tool_nav {
    padding-left: 1rem;
    padding-top: 2rem;
    img {
      width: 1.5rem;
      background: black;
    }
  }

  .#{$prefix}nav_tool_section {
    width: 50%;
    height: 100%;
    background-color: black;
    text-align: center;
    padding: 2rem 0 0 0;
    color: white;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 2s
  }

  .fade-enter, .fade-leave-to
  {
    opacity: 0
  }
</style>

