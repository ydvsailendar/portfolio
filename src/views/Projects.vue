<template>
  <div class="projects">
    <v-card>
      <v-card-text class="py-0">
        <v-timeline
          align-top
          dense
          v-for="project in projects"
          v-bind:key="project.id"
        >
          <v-timeline-item v-bind:color="project.color" small>
            <v-row class="pt-1">
              <v-col cols="2">
                <strong>{{ project.created_at }}</strong>
              </v-col>
              <v-col>
                <v-card tile outlined>
                  <v-btn tile text v-bind:color="project.color">
                    <v-icon left>mdi-github</v-icon>
                    <v-card-title class="headline" v-text="project.name">
                    </v-card-title>
                  </v-btn>
                  <v-divider></v-divider>
                  <v-row class="pa-4">
                    <v-col cols="4">
                      <div class="caption">
                        language: {{ project.language }}
                      </div>
                      <v-spacer></v-spacer>
                      <div class="caption">Size: {{ project.size }}</div>
                    </v-col>
                    <v-col cols="3">
                      <div class="caption">Stars: {{ project.stars }}</div>
                      <v-spacer></v-spacer>
                      <div class="caption">
                        Watchers: {{ project.watchers }}
                      </div>
                    </v-col>
                    <v-col cols="3">
                      <div class="caption">
                        Issues: {{ project.open_issues }}
                      </div>
                      <div class="caption">Info: {{ project.description }}</div>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      projects: [],
    };
  },
  created() {
    axios
      .get("https://api.github.com/users/ydvsailendar/repos")
      .then((response) => {
        let data = response
          ? response.data.filter((item) => item.fork === false)
          : [];
        this.projects = data.map((item) => {
          let date = new Date(item.created_at);
          let year = date.getFullYear();
          let month = date.getMonth() + 1;
          let created_at = `${year}/${month}`;
          let color =
            year === 2020 ? "success" : year === 2019 ? "warning" : "error";
          return {
            id: item.id,
            name: item.name,
            created_at,
            language: item.language ? item.language : "N/A",
            stars: item.stargazers_count,
            watchers: item.watchers_count,
            open_issues: item.open_issues_count,
            repo_url: item.git_url,
            size: item.size,
            color,
            description: item.description ? item.description : "N/A",
          };
        });
        this.projects.sort((a, b) =>
          a["created_at"] > b["created_at"] ? -1 : 1
        );
      });
  },
};
</script>
