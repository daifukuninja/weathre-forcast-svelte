<script lang="ts">
    import dayjs from "dayjs";
    import utc from "dayjs/plugin/utc";
    import timezone from "dayjs/plugin/timezone";
    import type { WeatherForcast } from "../scripts/interface_forcast";
    import ForcastRow from "./ForcastRow.svelte";
    dayjs.extend(utc);
    dayjs.extend(timezone);

    export let place: string;

    const getForcast = async (_place: string) => {
        const serverURL = `${API_URL}${_place}`;

        return new Promise<WeatherForcast>(function (resolve, reject) {
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
    let API_URL = import.meta.env.VITE_API_FORCAST_URL;

    let promise = getForcast(place);
</script>

<div class="font-sans mb-10">
    {#await promise}
        <div class="flex justify-center my-20">
            <div class="animate-spin h-8 w-8 bg-blue-300 rounded-xl" />
        </div>
    {:then params}
        <div class="grid grid-cols-4 gap-4">
            {#each params.list as row, i}
                <ForcastRow {row} />
            {/each}
        </div>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</div>

<style>
</style>
