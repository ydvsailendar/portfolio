<template>
  <div class="skills">
    <v-container v-for="skill in skills" v-bind:key="skill.name">
      <p class="caption ma-0">{{ skill.name.toUpperCase() }}</p>
      <v-progress-linear
        v-bind:color="skill.color"
        buffer-value="0"
        v-bind:value="skill.value"
        stream
      ></v-progress-linear>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { name: "aws", value: "40", color: "warning" },
        { name: "gcp", value: "15", color: "error" },
        { name: "react", value: "70", color: "success" },
        { name: "vue", value: "50", color: "warning" },
        { name: "graphql", value: "70", color: "success" },
        { name: "node", value: "70", color: "success" },
        { name: "python", value: "35", color: "warning" },
        { name: "nosql", value: "50", color: "warning" },
        { name: "sql", value: "20", color: "error" },
        { name: "jira", value: "50", color: "warning" },
        { name: "git", value: "60", color: "warning" },
        { name: "css", value: "40", color: "warning" },
        { name: "html", value: "80", color: "success" },
      ],
    };
  },
};
</script>
