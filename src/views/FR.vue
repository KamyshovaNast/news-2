<template>
  <v-main class="light-green lighten-5">
      <v-container>
        <v-row>
          <v-col v-for="i in news"
            :key="i"
            cols="4">
            <v-card>
                <v-card-title>{{i.title}}</v-card-title>
                <v-card-text>{{i.description}}</v-card-text>
                <img v-bind:src="i.urlToImage">
                <v-card-actions><a v-bind:href="i.url">Lien</a></v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
</template>

<script>
    export default {
        name: 'FR',
        data() {
            return {
                news: {}
            }
        },
        methods: {
            getNewsFr() {
                this.axios
                .get("https://newsapi.org/v2/top-headlines?country=fr&apiKey=2a9013172f7441c5b6f2e7a0d539660a")
                .then((response) => {this.news = response.data.articles})
            }
        },
        mounted() {
            this.getNewsFr();
        }
    }
</script>