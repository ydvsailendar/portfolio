<template>
  <div class="text-center ma-4">
    <v-btn
      retain-focus-on-click
      outlined
      text
      tile
      color="accent"
      router
      to="/"
    >
      <v-icon left>mdi-account-box</v-icon>PROFILE</v-btn
    >
    <v-btn
      router
      to="/projects"
      retain-focus-on-click
      outlined
      tile
      text
      color="accent"
    >
      <v-icon left>mdi-source-repository</v-icon>HAVE DONE</v-btn
    ><v-btn
      router
      to="/skills"
      retain-focus-on-click
      outlined
      tile
      text
      color="accent"
    >
      <v-icon left>mdi-marker-check</v-icon>CAN DO</v-btn
    >
    <v-btn
      router
      to="/extras"
      retain-focus-on-click
      outlined
      tile
      text
      color="accent"
    >
      <v-icon left>mdi-alpha-f-box</v-icon>FUN STUFFS</v-btn
    >
    <v-btn
      router
      to="/contact"
      retain-focus-on-click
      outlined
      tile
      text
      color="accent"
    >
      <v-icon left>mdi-account-search</v-icon>Know & Find</v-btn
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      focus: true,
    };
  },
};
</script>
