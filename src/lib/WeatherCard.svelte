<script lang="ts">
    import WeatherIcon from "./WeatherIcon.svelte";
    import K2c from "./K2c.svelte";
    import Unix2Jst from "./Unix2Jst.svelte";
    import dayjs from "dayjs";
    import utc from "dayjs/plugin/utc";
    import timezone from "dayjs/plugin/timezone";
    import Direction from "./Direction.svelte";
    import Unix2JstTime from "./Unix2JstTime.svelte";
    import type { WeatherNow } from "../scripts/interface_now";
    import { getWeatherAsync } from "../scripts/get_weather";
    dayjs.extend(utc);
    dayjs.extend(timezone);

    export let place: string;

    let API_URL = import.meta.env.VITE_API_NOW_URL;

    let promise = getWeatherAsync<WeatherNow>(API_URL, place);
</script>

<div class="font-sans mb-10">
    {#await promise}
        <div class="flex justify-center my-20">
            <div class="animate-spin h-8 w-8 bg-blue-300 rounded-xl" />
        </div>
    {:then params}
        <div class="flex flex-row rounded-lg bg-primary shadow-xl p-2">
            <div>
                <WeatherIcon icon_id={params.weather[0].icon} />
            </div>
            <div class="p-0">
                <h2 class="md:text-4xl text-2xl text-primary-content">
                    {params.name}
                </h2>
                <div
                    class="md:flex md:text-xl [&>div]:pr-5 text-primary-content"
                >
                    <div>
                        <span class="bg-accent text-accent-content"
                            >気温: <K2c kelvin={params.main.temp} /></span
                        >
                    </div>
                    <div>
                        <span class="bg-accent text-accent-content"
                            >体感気温: <K2c
                                kelvin={params.main.feels_like}
                            /></span
                        >
                    </div>
                    <div>
                        <span class="bg-accent text-accent-content"
                            >最高気温: <K2c
                                kelvin={params.main.temp_max}
                            /></span
                        >
                    </div>
                    <div>
                        <span class="bg-accent text-accent-content"
                            >最低気温: <K2c
                                kelvin={params.main.temp_min}
                            /></span
                        >
                    </div>
                    <div>
                        <span class="bg-accent text-accent-content"
                            >気圧: {params.main.pressure.toLocaleString()} hPa</span
                        >
                    </div>
                    <div>
                        <span class="bg-accent text-accent-content"
                            >風速: {params.wind.speed} m/s</span
                        >
                    </div>
                    <div>
                        <span class="bg-accent text-accent-content"
                            >風向: <Direction deg={params.wind.deg} /></span
                        >
                    </div>
                    <div>
                        <span class="bg-accent text-accent-content"
                            >日の出: <Unix2JstTime
                                unixtime={params.sys.sunrise}
                            /></span
                        >
                    </div>
                    <div>
                        <span class="bg-accent text-accent-content"
                            >日の入: <Unix2JstTime
                                unixtime={params.sys.sunset}
                            /></span
                        >
                    </div>
                </div>
            </div>
        </div>
        <p class="text-sm text-right mt-1">
            updated: <Unix2Jst unixtime={params.dt} />
        </p>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</div>

<style>
</style>
