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

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Montserrat:wght@400;500&display=swap");

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: darkgrey;
    }
    body {
        font-family: "Montserrat", sans-serif;
        width: 100%;
    }
    h2 {
        font-size: 3rem;
        font-family: "Abril Fatface", cursive;
        font-weight: lighter;
        color: #333;
    }
    h3 {
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem;
    }
    p {
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
    a {
        text-decoration: none;
        color: #333;
    }
}
</style>
