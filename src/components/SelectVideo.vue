<template>
  <div>
    <div class="columns">
      <div class="column is-full has-background-info">
        <h1 class="has-text-centered is-size-1 has-text-white">PoseDance: A TikTok Trainer</h1>
      </div>
    </div>
    <div class="columns">
      <div class="column is-full has-background-warning">
        <h2 class="is-size-2 has-text-centered has-text-white">Choose a Dance</h2>
      </div>
    </div>

    <div
      class="menu columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd"
    >
      <div
        class="column has-background-white shadow is-one-quarter has-text-centered"
        v-for="n in numVideos"
        v-bind:key="n"
      >
        <div>
          <img :src="'/images/' + n + '.png'" />
        </div>
        <div class="has-text-centered button is-link">
          <router-link class="has-text-white" :to="{ name: 'Dance', params: { id: n } }">Dance!</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      numVideos: 4
    };
  }
};
</script>
<style scoped>
.menu {
  margin: 10px;
}
</style>
