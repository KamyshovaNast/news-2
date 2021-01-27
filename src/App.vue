<template>
  <v-app id="inspire">
    <v-app-bar
      app
      shrink-on-scroll
    class="light-green lighten-4"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      
      <v-spacer></v-spacer>
      <v-btn elevation="2" class="new" v-on:click="getNewsRu"><router-link to="/ru">Новости</router-link></v-btn>
      <v-spacer></v-spacer>
      <v-btn elevation="2" class="new" v-on:click="getNewsGb"><router-link to="/gb">News (GB)</router-link></v-btn>
      <v-spacer></v-spacer>
      <v-btn elevation="2" class="new" v-on:click="getNewsUs"><router-link to="/usa">News (USA)</router-link></v-btn>
      <v-spacer></v-spacer>
      <v-btn elevation="2" class="new" v-on:click="getNewsGe"><router-link to="/de">Die Nachrichten</router-link></v-btn>
      <v-spacer></v-spacer>
      <v-btn elevation="2" class="new" v-on:click="getNewsFr"><router-link to="/fr">Nouvelles</router-link></v-btn>
      
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <router-view/>
  </v-app>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                news: {}
            }
        },
        methods: {
            getNewsRu() {
                this.axios
                .get("https://newsapi.org/v2/top-headlines?country=ru&apiKey=2a9013172f7441c5b6f2e7a0d539660a")
                .then((response) => {this.news = response.data.articles})
            },
            getNewsUs() {
                this.axios
                .get("https://newsapi.org/v2/top-headlines?country=us&apiKey=2a9013172f7441c5b6f2e7a0d539660a")
                .then((response) => {this.news = response.data.articles})
            },
            getNewsGb() {
                this.axios
                .get("https://newsapi.org/v2/top-headlines?country=gb&apiKey=2a9013172f7441c5b6f2e7a0d539660a")
                .then((response) => {this.news = response.data.articles})
            },
            getNewsGe() {
                this.axios
                .get("https://newsapi.org/v2/top-headlines?country=de&apiKey=2a9013172f7441c5b6f2e7a0d539660a")
                .then((response) => {this.news = response.data.articles})
            },
            getNewsFr() {
                this.axios
                .get("https://newsapi.org/v2/top-headlines?country=fr&apiKey=2a9013172f7441c5b6f2e7a0d539660a")
                .then((response) => {this.news = response.data.articles})
            }
        },
        mounted() {
            this.getNewsRu();
        }
    }
</script>


<style>
    a {
        box-sizing: border-box;
        padding-left: 8px;
    }
    .new {
        margin-top: 5px;
    }
    img {
        margin-left: 16px;
        height: 100px;
        width: 200px;
        background-size: contain;
    }
    a {
        text-decoration: none;
        padding: 0;
    }
</style>
