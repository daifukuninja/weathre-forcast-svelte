<script lang="ts">
    import dayjs from "dayjs";
    import utc from "dayjs/plugin/utc";
    import timezone from "dayjs/plugin/timezone";
    import type { WeatherForcast } from "../scripts/interface_forcast";
    import ForcastCell from "./ForcastCell.svelte";
    import { getWeatherAsync } from "../scripts/get_weather";
    dayjs.extend(utc);
    dayjs.extend(timezone);

    export let place: string;

    let API_URL = import.meta.env.VITE_API_FORCAST_URL;

    let promise = getWeatherAsync<WeatherForcast>(API_URL, place);
</script>

<div class="font-sans mb-10">
    {#await promise}
        <div class="flex justify-center my-20">
            <div class="animate-spin h-8 w-8 bg-blue-300 rounded-xl" />
        </div>
    {:then params}
        <div class="grid grid-cols-8 gap-4 text-center">
            {#each params.list as row, i}
                <ForcastCell {row} />
            {/each}
        </div>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</div>

<style>
</style>
