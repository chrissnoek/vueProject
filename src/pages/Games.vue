<template>
    <h1>Games</h1>
    <GamesCard :games="games" />
</template>

<script>
import axios from "axios";

export default {
    name: "Games",
    data() {
        return {
            games: [],
        };
    },
    created() {
        this.games = [];
    },
    methods: {
        async fetchGames() {
            const API_KEY = process.env.VUE_APP_RAWG_API_KEY;
            const result = await axios.get(
                `https://api.rawg.io/api/games?key=${API_KEY}&dates=2019-09-01,2019-09-30&platforms=18,1,7`
            );
            console.log(result);
            this.games = result.data.results;
        },
    },
    mounted() {
        this.fetchGames();
    },
};

// https://api.rawg.io/api/games?key=6649714ed20b49d1b25686695eb0974e
</script>
