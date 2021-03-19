<template>
    <Games />
</template>

<script>
import Games from "./Games";

export default {
    name: "App",
    components: {
        Games,
    },
    mounted() {
        this.$store.dispatch("loadGames");
    },
};
</script>
