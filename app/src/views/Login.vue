<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-3 has-background-warning">
          <h3 class="title has-text-black">Login</h3>
          <div v-if="message" class="notification is-light">
            <p>{{ message }}</p>
          </div>
          <div class="box">
            <form @submit.prevent="submit">
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

              <button type="submit" class="button is-block is-primary is-large is-fullwidth">Login</button>
            </form>
          </div>
          <p class="has-text-grey">
            <router-link to="register">Register</router-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      message: "",
      email: "",
      password: ""
    };
  },
  methods: {
    submit() {
      axios
        .post("/api/login", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          if (response.data.errorMessage == null) {
            this.$store.commit("setUserId", response.data.PlayFabId);
            this.$store.commit("setSessionId", response.data.SessionTicket);
            this.$router.push({ path: "/" });
          } else {
            this.message = response.data.errorMessage;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
