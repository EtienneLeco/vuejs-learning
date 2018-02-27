<template>
    <div class="widget tab-toggler">
        <div
            v-for="tab in tabs"
            :key="tab.tab"
            class="toggle color-border-primary"
            :class="tab.tab === selected ? 'selected color-text-primary' : 'color-text-grey-level-3 color-text-primary-hover'"
            :title="tab.title"
            @click="$emit('select', tab.tab)"
        >{{tab.label}}{{isNaN(tab.value) ? '' : ` (${tab.value})`}}</div>
        <div class="right-items">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            tabs: Array,
            selected: String
        }
    };
</script>

<style scoped>
    .widget.tab-toggler {
        display: flex;
    }
    .toggle {
        width: 100px;
        color: lightblue;
        text-align: center;
        border: solid 1px lightgrey;
        border-radius: 6px;
        margin: 2px;
        cursor: pointer;
    }
    .toggle:hover {
        color: blue;
    }
    .toggle.selected {
        color: darkblue;
        cursor: default;
        background: lightgrey;
    }

</style>
