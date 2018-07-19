<script>
  import Base from '@/components/Base.vue'

  export default {
    name: "mobileNavTool",
    'extends': Base,
    data(){
      return {
        menuStatus: 'true',
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      changeMenu(status){
        this.menuStatus = !status;
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
