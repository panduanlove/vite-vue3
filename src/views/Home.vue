<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue';
</script>

<template>
  <div class="home" @click="toVuex">to vuex</div>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Vuex',
  setup () {
    const count = ref < number > (0);
    const increment = () => {
      count.value += 1;
    };
    return { count, increment };
  },
  methods:{
    toVuex(){
      console.log(this.$router.push('/vuex'));
    }
  }

});
</script>
<style>
.home{
  color:red;
}
</style>
