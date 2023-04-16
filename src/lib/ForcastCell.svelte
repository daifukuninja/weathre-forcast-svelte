<script lang="ts">
    import type { ForcastRow } from "../scripts/interface_forcast";
    import K2c from "./K2c/K2c.svelte";
    import WeatherIcon from "./WeatherIcon.svelte";
    import Unix2JstHhMm from "./Unix2JstHhMm.svelte";
    import Arrow from "./Arrow.svelte";
    export let row: ForcastRow;
</script>

<div>
    <WeatherIcon icon_id={row.weather[0].icon} />
    <Unix2JstHhMm unixtime={row.dt} />
    <div><K2c kelvin={row.main.temp} /></div>
    <Arrow angle={row.wind.deg} speed={row.wind.speed} />
</div>
