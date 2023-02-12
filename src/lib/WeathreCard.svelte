<script lang="ts">
    import WeatherIcon from "./WeatherIcon.svelte";
    import K2c from "./K2c.svelte";
    import Unix2Jst from "./Unix2Jst.svelte";

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
    const getForcast = async (_place) => {
        const serverURL =
            // `https://api.openweathermap.org/data/2.5/weather?zip=311-4144,JP&appid=${__backend.env.API_KEY}&lang=jp`;
            `http://localhost:3000/${_place}`;
        const response = await fetch(serverURL, {
            method: "GET",
            mode: "cors",
            credentials: "omit",
        });
        let result = await response.json();
        let now =
            new Date(
                new Date().toLocaleString({ timeZone: "Asia/Tokyo" })
            ).getTime() / 1000;
        console.log(now);
        result.dt = now;
        return result;
    };

    let promise = getForcast(place);

</script>

<div class="font-sans mb-10">
    {#await promise}
        <p>...waiting</p>
    {:then params}
        <div class="card card-side bg-base-300 shadow-xl p-2">
            <figure>
                <WeatherIcon icon_id={params.weather[0].icon} />
            </figure>
            <div class="card-body p-0">
                <h2 class="card-title">{params.name}</h2>
                <p>気温: <K2c kelvin={params.main.temp} /></p>
                <p>最高気温: <K2c kelvin={params.main.temp_max} /></p>
                <p>最低気温: <K2c kelvin={params.main.temp_min} /></p>
            </div>
        </div>
        <p class="text-sm text-right mt-1">
            updated: <Unix2Jst unixtime={params.dt} />
        </p>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</div>
