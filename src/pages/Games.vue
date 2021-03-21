<template>
    <div v-if="loadedSearchedGames.length">
        <h2>Searched</h2>
        <div v-if="loadedSearchedGames" class="games">
            <div :key="game.id" v-for="game in loadedSearchedGames">
                <div v-if="game.background_image">
                    <GameCard :game="game" />
                </div>
            </div>
        </div>
    </div>
    <h2>Upcoming games</h2>
    <div v-if="loadedUpcomingGames" class="games">
        <div :key="game.id" v-for="game in loadedUpcomingGames">
            <div v-if="game.background_image">
                <GameCard :game="game" />
            </div>
        </div>
    </div>
    <h2>Popular games</h2>
    <div v-if="loadedPopularGames" class="games">
        <div :key="game.id" v-for="game in loadedPopularGames">
            <div v-if="game.background_image">
                <GameCard :game="game" />
            </div>
        </div>
    </div>
    <h2>New games</h2>
    <div v-if="loadedNewGames" class="games">
        <div :key="game.id" v-for="game in loadedNewGames">
            <div v-if="game.background_image">
                <GameCard :game="game" />
            </div>
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
        loadedPopularGames() {
            return this.$store.getters.getPopularGames.filter((game) => {
                return game.background_image;
            });
        },
        loadedUpcomingGames() {
            return this.$store.getters.getUpcomingGames.filter((game) => {
                return game.background_image;
            });
        },
        loadedNewGames() {
            return this.$store.getters.getNewGames.filter((game) => {
                return game.background_image;
            });
        },
        loadedSearchedGames() {
            return this.$store.getters.getSearched.length > 0
                ? this.$store.getters.getSearched.filter((game) => {
                      return game.background_image;
                  })
                : [];
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
