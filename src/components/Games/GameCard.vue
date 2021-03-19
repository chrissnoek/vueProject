<template>
    <div v-if="game.background_image" class="game">
        <h3>{{ game.name }}</h3>
        <p>{{ game.released }}</p>
        <img :src="game.background_image" :alt="game.name" />
    </div>
</template>

<script>
export default {
    name: "GameCard",
    props: {
        game: Object,
    },
};
</script>

<style lang="scss" scoped>
.game {
    min-height: 30vh;
    box-shadow: 0px 5px 30px rgba($color: #000000, $alpha: 0.2);
    text-align: center;
    border-radius: 1rem;

    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
}
</style>
