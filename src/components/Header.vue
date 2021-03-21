<template>
    <header>
        <nav>
            <div @click="clearSearch" class="logo">
                <img :src="logo" alt="Game Vue Project" />
                <h1>Game Project</h1>
            </div>
            <form @submit.prevent="submitHandler">
                <input type="text" v-model="searchInput" />
                <input type="submit" value="Search" />
            </form>
        </nav>
    </header>
</template>

<script>
import logo from "../img/logo.svg";

export default {
    name: "Header",
    data() {
        return {
            logo: logo,
            searchInput: "",
        };
    },
    methods: {
        submitHandler() {
            this.$store.dispatch("fetchSearch", this.searchInput);
            this.searchInput = "";
        },
        clearSearch() {
            this.$store.dispatch("clearSearch");
        },
    },
};
</script>

<style lang="scss" scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    width: 100%;

    nav {
        padding: 3rem 5rem;
        text-align: center;
        width: 100%;

        input {
            width: 30%;
            font-size: 1.5rem;
            padding: 1rem;
            outline: none;
            border: none;
            margin-top: 1rem;
            box-shadow: 0px 0px 30px rgba($color: #000000, $alpha: 0.5);
            font-weight: bold;
            font-family: "Monserrat", sans-serif;
        }
        input[type="submit"] {
            font-size: 1.5rem;
            border: none;
            padding: 1rem;
            cursor: pointer;
            background: #ff7676;
            color: white;
            border-radius: 5px;
        }
    }
    .logo {
        display: flex;
        justify-content: center;
        padding: 1rem;
        cursor: pointer;
        img {
            height: 2rem;
            width: 2rem;
        }
        h1 {
            margin-left: 1rem;
            font-size: 2rem;
        }
    }
}
</style>
