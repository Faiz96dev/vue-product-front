<template>
  <div class="min-h-screen  dark:bg-gray-700">
    <NavBar/>
    <router-view class="mt-[30px]"/>
  </div>

</template>

<script setup>
import { onMounted } from '@vue/runtime-core'
import NavBar from './components/NavBar.vue'
import router from './router'

onMounted(()=>{
  router.push('/products_view')
  fetchProducts
})
</script>

<style>
#app {height: 100%;
/* background: #000; */
}

</style>
