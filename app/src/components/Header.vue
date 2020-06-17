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

            <a href="https://www.github.com/jlooper/posedance" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                fill="white"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
            </a>
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
      this.$store.commit("clearSessionId");
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
