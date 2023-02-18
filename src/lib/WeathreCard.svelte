<script lang="ts">
    import WeatherIcon from "./WeatherIcon.svelte";
    import K2c from "./K2c.svelte";
    import Unix2Jst from "./Unix2Jst.svelte";
    import dayjs from 'dayjs';
    import utc from 'dayjs/plugin/utc';
    import timezone from 'dayjs/plugin/timezone';
    import Direction from "./Direction.svelte";
    import Unix2JstTime from "./Unix2JstTime.svelte";
    dayjs.extend(utc);
    dayjs.extend(timezone);

    export let place: string;

    const places = {
        Hirakue: {
            lon: 140.3988,
            lat: 36.402,
        },
        Tanbara: {
            lon: 139.066,
            lat: 36.7298,
        },
        Sapporo: {
            lon: 141.35,
            lat: 43.068,
        },
        Hitachinaka: {
            lon: 140.5346,
            lat: 36.3966,
        },
    };

    // STEP01 fetchでパラメータを取得する機能
    const getForcast = async (_place: string) => {
        const serverURL =
        // TODO: placeと緯度経度からURLを組み立てる処理を検討する
            // `https://api.openweathermap.org/data/2.5/weather?zip=311-4144,JP&appid=${__backend.env.API_KEY}&lang=jp`;
            `http://localhost:3000/${_place}`;
        const response = await fetch(serverURL, {
            method: "GET",
            mode: "cors",
            credentials: "omit",
        });
        let result = await response.json();
        result.dt = dayjs().tz("Asia/Tokyo").valueOf() / 1000;
        return result;
    };

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
                <h2 class="md:text-4xl text-2xl text-primary-accent">{params.name}</h2>
                <div class="md:flex md:text-xl [&>div]:pr-5 text-primary-content">
                    <div><span class="bg-base-200">気温: <K2c kelvin={params.main.temp} /></span></div>
                    <div><span class="bg-base-200">体感気温: <K2c kelvin={params.main.feels_like} /></span></div>
                    <div><span class="bg-base-200">最高気温: <K2c kelvin={params.main.temp_max} /></span></div>
                    <div><span class="bg-base-200">最低気温: <K2c kelvin={params.main.temp_min} /></span></div>
                    <div><span class="bg-base-200">気圧: {params.main.pressure.toLocaleString()} hPa</span></div>
                    <div><span class="bg-base-200">風速: {params.wind.speed} m/s</span></div>
                    <div><span class="bg-base-200">風向: <Direction deg={params.wind.deg}/></span></div>
                    <div><span class="bg-base-200">日の出: <Unix2JstTime unixtime={params.sys.sunrise}/></span></div>
                    <div><span class="bg-base-200">日の入: <Unix2JstTime unixtime={params.sys.sunset}/></span></div>    
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