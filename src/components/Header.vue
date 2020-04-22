<template>
  <div>
    <nav class="navbar is-info is-transparent" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <h1 class="navbar-item is-size-1 has-text-white">PoseDance: A TikTok Trainer</h1>
        </router-link>
        <a
          id="burger"
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="menu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="menu" class="navbar-menu has-background-info">
        <div class="navbar-end">
          <div class="navbar-item">
            <router-link class="navbar-item has-text-white" :to="'/leaderboard'">Leaderboard</router-link>

            <span v-if="userId != null">
              <a href="/" class="navbar-item" @click="logout">Logout</a>
            </span>
            <span v-if="userId == null">
              <router-link class="navbar-item has-text-white" :to="'/login'">Login</router-link>
            </span>
          </div>
        </div>
      </div>
    </nav>
    <div class="has-background-link" height="5px">&nbsp;</div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "my-navbar",
  data() {
    return {
      isLoggedIn: false
    };
  },
  computed: {
    ...mapState(["userId"])
  },
  methods: {
    logout() {
      this.$store.commit("clearUserId");
    }
  },
  mounted() {
    var burger = document.getElementById("burger");
    var menu = document.getElementById("menu");
    burger.addEventListener("click", function() {
      burger.classList.toggle("is-active");
      menu.classList.toggle("is-active");
    });
  }
};
</script>
