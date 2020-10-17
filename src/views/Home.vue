<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <a-date-picker @change="onChange" v-model="time" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    },
  },
  data() {
    return {
      time: "",
    };
  },
};
</script>
