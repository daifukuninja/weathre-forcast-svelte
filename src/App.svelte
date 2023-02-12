<script lang="ts">
  import Unix2Jst from "./lib/Unix2Jst.svelte";
  import K2c from "./lib/K2c.svelte";
  import WeatherIcon from "./lib/WeatherIcon.svelte";
  // STEP01 onMountを呼び出します
  import { beforeUpdate, onMount } from "svelte";

  let params = undefined;

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
      lon: 141.350,
      lat: 43.068
    },
    Hitachinaka: {
      lon: 140.5346,
      lat: 36.3966
    }
  };

  // STEP01 fetchでパラメータを取得する機能
  const getForcast = async (location) => {
    const serverURL =
      // `https://api.openweathermap.org/data/2.5/weather?zip=311-4144,JP&appid=${__backend.env.API_KEY}&lang=jp`;
      `http://localhost:3000/${location}`;
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

  let promise = getForcast("hirakue");

  // STEP01 アプリマウント時に、取得したパラメータを変数に適用する処理
  onMount(async () => {
    // NOTE: デザイン編集のため一時的のfetch停止
    promise = getForcast("hirakue");
    //
  });

  const setPlace = async (location) => {
    console.log("done.");
    promise = getForcast(location);
  };
</script>

<div class="container px-0">
  <header class="sticky top-0 navbar bg-base-100 shadow p-4 z-50">
    <div class="flex-1">
      <button class="btn btn-ghost normal-case text-xl"
        >スーパー地元天気予報</button
      >
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li>
          <button>
            Select
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              ><path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              /></svg
            >
          </button>
          <ul class="p-2 bg-base-100">
            <li>
              <button on:click={() => setPlace("hirakue")}>茨城県水戸市</button>
            </li>
            <li>
              <button on:click={() => setPlace("numata")}>群馬県沼田市</button>
            </li>
            <li><button>北海道札幌市</button></li>
            <li><button>茨城県ひたちなか市</button></li>
          </ul>
        </li>
      </ul>
    </div>
  </header>
  <main class="p-4">
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
    <p class="mb-6">
      What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with
      desktop publishing software like Aldus PageMaker including versions of
      Lorem Ipsum.
    </p>

    <p class="mb-6">
      What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with
      desktop publishing software like Aldus PageMaker including versions of
      Lorem Ipsum.
    </p>

    <p class="mb-6">
      What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with
      desktop publishing software like Aldus PageMaker including versions of
      Lorem Ipsum.
    </p>
  </main>
</div>
