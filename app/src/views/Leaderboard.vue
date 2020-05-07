<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container has-text-centered has-background-white shadow">
        <h2 class="title has-text-black">Leaderboard</h2>
        <p
          class="is-size-3"
          v-for="leader in leaderboard"
          :key="leader.Position"
        >{{leader.Profile.LinkedAccounts[0].Username || 'anonymous'}} : {{leader.StatValue}}</p>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      leaderboard: []
    };
  },

  created() {
    axios
      .get("/api/playfab_leaderboard")
      .then(function(response) {
        // handle success
        console.log(response);
        this.leaderboard = response;
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
};
</script>