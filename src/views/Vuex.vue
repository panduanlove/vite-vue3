<script setup lang="ts">

</script>

<template>
  <div class="vuex" @click="toTest">toTest</div>
  <div>{{count}}</div>
  <div @click="increment">count++</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'Vuex',
  setup () {
    const count = ref < number > (10);
    const increment = () => {
      count.value += 1;
    };
    return { count, increment };
  },
  methods:{
    toTest(){
      this.$router.push('/test');
    }
  }

});
</script>
<style>
.vuex{
  color:green;
}
</style>
