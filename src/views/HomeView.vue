<template>
  <div class="home">
    <img alt="Vue logo" src="https://www.shrewsburyfamilychiropractic.com/wp-content/uploads/2020/07/Shape.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
