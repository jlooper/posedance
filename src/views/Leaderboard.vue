<template>
  <div>{{key}}</div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      key: ""
    };
  },

  methods: {},
  async created() {
    try {
      const response = await axios.get(
        "https://posedance-function.azurewebsites.net/api/getKey"
      );
      this.key = response.data.data;
    } catch (error) {
      console.error(error);
    }
  }
};
</script>