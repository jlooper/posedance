<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-3 has-background-primary">
          <h3 class="title has-text-black">Register</h3>
          <div v-if="message" class="notification is-light">
            <p>{{ message }}</p>
          </div>
          <div class="box">
            <form @submit.prevent="submit">
              <div class="field">
                <div class="control">
                  <input
                    class="input is-large"
                    type="username"
                    v-model="username"
                    placeholder="Username"
                    autofocus
                  />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    class="input is-large"
                    type="email"
                    v-model="email"
                    placeholder="Your Email"
                    autofocus
                  />
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input
                    class="input is-large"
                    v-model="password"
                    type="password"
                    placeholder="Your Password"
                  />
                </div>
              </div>

              <button
                type="submit"
                class="button is-block is-primary is-large is-fullwidth"
              >Register</button>
            </form>
          </div>
          <p class="has-text-grey">
            <router-link to="login">Login</router-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { PlayFabClient } from "playfab-sdk";
export default {
  data() {
    return {
      message: "",
      email: "",
      password: "",
      username: ""
    };
  },
  methods: {
    submit() {
      var loginRequest = {
        Email: this.email,
        Password: this.password,
        Username: this.username,
        RequireBothUsernameAndEmail: true
      };
      PlayFabClient.settings.titleId = "266B3";
      PlayFabClient.RegisterPlayFabUser(loginRequest, this.LoginCallback);
    },

    LoginCallback(error, result) {
      if (result !== null) {
        this.$router.push({ path: "/" });
      } else if (error !== null) {
        this.message = error.errorMessage;
      }
    }
  }
};
</script>
