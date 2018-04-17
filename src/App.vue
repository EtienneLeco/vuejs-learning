<template>
    <div class="main">
        <div class="hello">
            <div class="header">
                <button class="button">{{ buttonLabel }}</button>
                <button class="button" @click="data = []">Clear</button>
            </div>
            <div class="data-list">

                <table>
                    <thead>
                        <th class="name">Name</th>
                        <th>Coordinates</th>
                    </thead>
                    <tbody>
                        <tr v-if="! data || ! data.length">
                            <td colspan="2">No data to display</td>
                        </tr>
                        <tr v-for="item in data">
                            <td class="name">{{ item.fields.name }}</td>
                            <td class="position">N {{ item.fields.geo_point_2d[0]}} E {{ item.fields.geo_point_2d[1] }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    const URL = "https://opendata.paris.fr/api/records/1.0/search//?dataset=zones-touristiques-internationales&rows=5";

    const loadJSon = async (url) => {
        return fetch(URL).then(res => res.json());
    };

    export default {
        data() {
            return {
                buttonLabel: "Load data",
                data: []
            };
        }
    };
</script>

<style>
    .main {
        height: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        font-family: system-ui;
    }

    .hello {
        display: flex;
        justify-content: left;
        flex-direction: column;
    }
    .header {
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
    }
    .button {
        padding: 5px 15px;
        font-size: 16px;
        background: #FF5722;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin: 10px;
        outline: none;
    }
    .button:hover {
        background: #DC4312;
    }
    .data-list table {
        width: 100%;
    }
    .data-list table .name {
        width: 30%;
        text-align: left;
    }
</style>
