<template>
    <div class="cardShadow">
        <div class="detail">
            <div class="stats">
                <div class="rating">
                    <h3>{{ loadedGame.name }}</h3>
                    <p>Rating: {{ loadedGame.rating }}</p>
                    <div class="info"><h3>Platforms</h3></div>

                    <div class="platforms">
                        <h3 :key="platform.id" v-for="platform in platforms">
                            {{ platform }}
                        </h3>
                    </div>
                </div>
            </div>
            <div class="media">
                <img
                    :src="loadedGame.background_image"
                    :alt="loadedGame.name"
                />
            </div>
            <div class="description">
                <p>{{ loadedGame.description_raw }}</p>
            </div>
            <div class="gallery">
                <h2>screenshots</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "GameDetail",

    computed: {
        loadedGame() {
            console.log(this.$store.getters.getCurrentGame);
            return this.$store.getters.getCurrentGame;
        },
        platforms() {
            const curGame = this.$store.getters.getCurrentGame;
            return (
                curGame.platforms &&
                curGame.platforms.map((data) => `${data.platform.name}`)
            );
        },
    },
};
</script>

<style lang="scss" scoped>
.cardShadow {
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba($color: #000000, $alpha: 0.5);
    position: fixed;
    top: 0;
    left: 0;

    &::--webkit-scrollbar {
        width: 0.5rem;
    }
    &::--webkit-scrollbar-thumb {
        background-color: #ff7676;
    }
    &::--webkit-scrollbar-track {
        background-color: white;
    }

    .detail {
        width: 80%;
        border-radius: 1rem;
        padding: 2rem 20rem;
        background: white;
        position: absolute;
        left: 10%;
        color: black;

        img {
            width: 100%;
        }
    }
}
</style>
