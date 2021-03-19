<template>
    <Layout>
        <Home />
    </Layout>
</template>

<script>
import Home from "./pages/Home";
import Layout from "./components/Layout";

export default {
    name: "App",
    components: {
        Layout,
        Home,
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
