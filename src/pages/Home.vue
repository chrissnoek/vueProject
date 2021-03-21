<template>
    <div>
        <Games />
        <div v-if="gameId"><GameDetail /></div>
    </div>
</template>

<script>
import Games from "./Games";
import GameDetail from "../components/Games/GameDetail";

export default {
    name: "App",
    data() {
        return {
            gameId: "",
        };
    },
    components: {
        Games,
        GameDetail,
    },
    mounted() {
        this.$store.dispatch("loadGames");
        if (this.$route.params.id) this.gameId = this.$route.params.id;
        this.$watch(
            () => this.$route.params,
            () => {
                // react to route changes...
                console.log(this.$route.params.id);
                this.$route.params.id
                    ? (this.gameId = this.$route.params.id)
                    : (this.gameId = "");
            }
        );
    },
    created() {},
};
</script>
