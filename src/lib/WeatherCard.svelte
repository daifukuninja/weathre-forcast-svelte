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
    dayjs.extend(utc);
    dayjs.extend(timezone);

    export let place: string;

    const getForcast = async (_place: string) => {

        // const serverURL = `https://get_weather-production.api-contribe.workers.dev/api/now/${_place}`;
        const serverURL = `http://localhost:8787/api/now/${_place}`;

        return new Promise<WeatherNow>(function (resolve, reject) {
            // Do the usual XHR stuff
            // const auth = window.btoa("contriBe:qwertyui");
            const auth = window.btoa(`${API_USER}:${API_PASS}`);

            var req = new XMLHttpRequest();
            req.open("GET", serverURL);
            req.setRequestHeader("Authorization", "Basic " + auth);

            req.onload = function () {
                // This is called even on 404 etc
                // so check the status
                if (req.status == 200) {
                    // Resolve the promise with the response text
                    resolve(JSON.parse(req.responseText));
                } else {
                    // Otherwise reject with the status text
                    // which will hopefully be a meaningful error
                    reject(Error(req.statusText));
                }
            };

            // Handle network errors
            req.onerror = function () {
                reject(Error("Network Error"));
            };

            // Make the request
            req.send();
        });
    };

    let API_USER = import.meta.env.VITE_WORKER_USER;
    let API_PASS = import.meta.env.VITE_WORKER_PASS;

    let promise = getForcast(place);

</script>

<div class="font-sans mb-10">
    {#await promise}
        <p>...waiting</p>
    {:then params}
        <div class="flex flex-row rounded-lg bg-primary shadow-xl p-2">
            <div>
                <figure class="basis-auto">
                    <WeatherIcon icon_id={params.weather[0].icon} />
                </figure>
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
