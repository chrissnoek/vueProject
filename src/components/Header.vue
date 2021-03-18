<template>
    <header>
        <nav>
            <ul>
                <li>Home</li>
                <li>Games</li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: "header",
};
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}
</style>
