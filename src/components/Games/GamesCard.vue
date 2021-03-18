<template>
    <div :key="game.id" v-for="game in games">
        {{ game.name }}
    </div>
</template>

<script>
export default { name: "GamesCard" };
</script>
