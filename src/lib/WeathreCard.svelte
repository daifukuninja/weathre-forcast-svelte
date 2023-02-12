
<script>
    import WeatherIcon from "./WeatherIcon.svelte";
    import K2c from "./K2c.svelte";
    import Unix2Jst from "./Unix2Jst.svelte";
    
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
