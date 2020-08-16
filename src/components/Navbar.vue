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
      <v-icon left>mdi-account</v-icon>About</v-btn
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
      <v-icon left>mdi-folder</v-icon>Projects</v-btn
    ><v-btn
      router
      to="/skills"
      retain-focus-on-click
      outlined
      tile
      text
      color="accent"
    >
      <v-icon left>mdi-star</v-icon>Skills</v-btn
    ><v-btn
      router
      to="/contact"
      retain-focus-on-click
      outlined
      tile
      text
      color="accent"
    >
      <v-icon left>mdi-play</v-icon>Reach Out</v-btn
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
