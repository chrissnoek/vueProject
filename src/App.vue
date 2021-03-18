<template>
    <Layout>
        <p>Main content goes here</p>
        <Games />
    </Layout>
</template>

<script>
import Games from "./pages/Games.vue";
import Layout from "./components/Layout";

export default {
    name: "App",
    components: {
        Layout,
        Games,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
