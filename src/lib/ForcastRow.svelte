<script lang="ts">
    import type { ForcastRow } from "../scripts/interface_forcast";
    import K2c from "./K2c.svelte";
    import WeatherIcon from "./WeatherIcon.svelte";
    import Unix2JstHhMm from "./Unix2JstHhMm.svelte";
    export let row: ForcastRow;
</script>

<div>
    <div><WeatherIcon icon_id={row.weather[0].icon} /></div>
    <div><Unix2JstHhMm unixtime={row.dt} /></div>
    <div class="temp"><K2c kelvin={row.main.temp} /></div>
</div>

<style>
    .temp {
        font-size: small;
    }
</style>