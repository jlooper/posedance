<template>
  <div id="app">
    <Header />
    <router-view />
    <!--<Footer />-->
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
//import Footer from "@/components/Footer.vue";
import * as tf from "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-backend-cpu";
import "@tensorflow/tfjs-backend-webgl";

export default {
  name: "App",
  components: { Header /*Footer*/ },
  async created() {
    await tf.setBackend("webgl");
  },
};
</script>
<style>
html {
  background: url("./assets/background.jpg");
  background-repeat: repeat;
  height: 100%;
}
</style>
