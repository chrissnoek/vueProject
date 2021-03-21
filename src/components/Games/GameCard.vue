<template>
    <div class="game" @click="loadGame">
        <h3>{{ game.name }}</h3>
        <p>{{ game.released }}</p>
        <img :src="image" :alt="game.name" />
    </div>
</template>

<script>
import { resizeImage } from "../../utils";
export default {
    name: "GameCard",
    props: {
        game: Object,
    },
    methods: {
        loadGame() {
            document.body.style.overflow = "hidden";
            this.$router.push(`/game/${this.$props.game.id}`);
        },
    },
    computed: {
        image() {
            return resizeImage(this.$props.game.background_image, 640);
        },
    },
};
</script>

<style lang="scss" scoped>
.game {
    min-height: 30vh;
    box-shadow: 0px 5px 30px rgba($color: #000000, $alpha: 0.2);
    text-align: center;
    border-radius: 1rem;
    overflow: hidden;

    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
}
</style>
