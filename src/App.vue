<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "App",
  components: { Header }
};
</script>
<style>
html {
  background: url("./assets/background.jpg");
  background-repeat: repeat;
}
</style>