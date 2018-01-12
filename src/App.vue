<template>
    <div class="main">
        <div class="hello">
            Hello<br><br>
            Your Vuejs app has been successfully mounted. <br>
            Add your component here 😀
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
    };
</script>

<style>
    .main {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: system-ui;
    }

    .hello {
        display: flex;
        justify-content: left;
    }
</style>
