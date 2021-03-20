<template>
    <Games />
    <GameDetail />
</template>

<script>
import Games from "./Games";
import GameDetail from "../components/Games/GameDetail";

export default {
    name: "App",
    components: {
        Games,
        GameDetail,
    },
    mounted() {
        this.$store.dispatch("loadGames");
    },
};
</script>
