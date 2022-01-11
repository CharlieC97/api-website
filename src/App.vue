<script setup>
import NavSidebar from "./components/NavSidebar.vue";
import TopHeader from "./components/TopHeader.vue";
</script>

<template>
  <TopHeader />
  <NavSidebar />
  <div :style="{ 'margin-left': $store.getters.sidebarWidth }">
    <router-view />
  </div>

  <button @click="$store.commit('toggleCollapse')">PRESS HERE TO TOGGLE</button>
  <h1>State of collapse: {{ $store.state.collapsed }}</h1>
  <h1>Getters for sidebar width: {{ $store.getters.sidebarWidth }}</h1>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
