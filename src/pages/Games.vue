<template>
    <h1>Games</h1>
    <div v-if="loadedGames" class="games">
        <div :key="game.id" v-for="game in loadedGames">
            <GameCard :game="game" />
        </div>
    </div>
</template>

<script>
import GameCard from "../components/Games/GameCard";

export default {
    name: "Games",
    components: {
        GameCard,
    },
    computed: {
        loadedGames() {
            return this.$store.getters.getPopularGames;
        },
    },
};
</script>

<style lang="scss" scoped>
.games {
    padding: 0rem 5rem;
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 3rem;
}
</style>
