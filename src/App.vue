<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: { Header, Footer }
};
</script>
<style>
html {
  background: url("./assets/background.jpg");
  background-repeat: repeat;
}
</style>