<template>
    <div class="main">
        <div class="hello">
            <div class="header">Here is a nice toggle to switch between views</div>
            <div class="toggler">
                <toggler :tabs="tabs" selected="default"></toggler>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Toggler from "./Toggler.vue";

    export default {
        data() {
            return {
                tabs: [{
                    tab: "default",
                    label: "Default"
                }],
                selected: ""
            };
        },
        components: {
            Toggler,
        }
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
        flex-direction: column;
    }

    .header,
    .toggler {
        margin-bottom: 30px;
    }
</style>
