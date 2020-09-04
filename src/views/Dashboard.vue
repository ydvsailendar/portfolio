<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-avatar size="200">
        <img v-bind:src="avatar" alt="shailendra yadav" />
      </v-avatar>
    </v-row>
    <v-row>
      <v-col align="center" justify="center" class="grey--text text--darken-2">
        <h1 class="text-decoration-underline">{{ name }}</h1>
        <p class="caption text-decoration-underline">{{ address }}</p>
        <p class="text-decoration-underline">{{ role }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      avatar: "/avatar.jpg",
      name: "SHAILENDRA YADAV",
      address: "NAWALPARASI-1, NEPAL",
      role: "CLOUD/FULL STACK DEVELOPER",
      goods: "I enjoy streets food, Kinda talky and get along well",
      bads: "Once in its quite hard for me to come out of it i think",
      hobby: "SIDE NOTE I LOVE PLAYING TABLE TENNIS, DOTA 2 AND BEING OTAKU",
    };
  },
};
</script>
