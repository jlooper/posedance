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
import { PlayFab, PlayFabServer } from "playfab-sdk";
import axios from "axios";

export default {
  data() {
    return {
      leaderboard: [],
      key: ''
    };
  },

  methods: {
    LeaderboardCallback(error, result) {
      if (result !== null) {
        this.leaderboard = result.data.Leaderboard;
        console.log(this.leaderboard);
      } else if (error !== null) {
        console.log(error.errorMessage);
      }
    }
  },
  created() {

    let res = await axios.get("/functions/initTrigger");
    this.key = res.data.playfab_key;

    var leaderboardRequest = {
      ProfileConstraints: {
        ShowDisplayName: true,
        ShowLinkedAccounts: true,
        ShowContactEmailAddresses: true
      },
      MaxResultsCount: 100,
      StartPosition: 0,
      StatisticName: "score"
    };
    PlayFabServer.settings.titleId = "266B3";
    PlayFab.settings.developerSecretKey = this.key;
    PlayFabServer.GetLeaderboard(leaderboardRequest, this.LeaderboardCallback);
  }
};
</script>