<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";
  // STEP01 onMountを呼び出します
  import { beforeUpdate, onMount } from "svelte";

  let t = 0.0;
  let place = "";
  let icon_id = "10d"

  beforeUpdate(() => {
    //
  });

  // STEP01 fetchでパラメータを取得する機能
  const getForcast = async () => {
    const serverURL =
      "https://api.openweathermap.org/data/2.5/weather?zip=311-4144,JP&appid=ea2fa8ffa4d7e03729e551eee17d3ccf&lang=jp";
    const response = await fetch(serverURL, {
      method: "GET",
      mode: "cors",
      credentials: "omit",
    });
    return await response.json();
  };

  // STEP01 アプリマウント時に、取得したパラメータを変数に適用する処理
  onMount(async () => {
    // NOTE: デザイン編集のため一時的のfetch停止
    // let params = await getForcast();

    // t = params.main.temp;
    // place = params.name;
    t = 200;
    place = "local";
  });

  function setPlace(value) {
    place = value;
  }
</script>

<div class="container px-0">
  <header class="sticky top-0 navbar bg-base-100 shadow p-4 z-50">
    <div class="flex-1">
      <button class="btn btn-ghost normal-case text-xl">スーパー地元天気予報</button>
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
            <li><button on:click={() => setPlace('Mito')}>茨城県水戸市</button></li>
            <li><button>群馬県沼田市</button></li>
            <li><button>北海道札幌市</button></li>
            <li><button>茨城県ひたちなか市</button></li>
          </ul>
        </li>
      </ul>
    </div>
  </header>
  <main class="p-4">
    <div class="font-sans">
      <div class="card card-side bg-base-300 shadow-xl p-5">
        <figure><img src="http://openweathermap.org/img/wn/{icon_id}@2x.png" alt="wicon"/></figure>
        <div class="card-body">
          <h2 class="card-title">{place}</h2>
          <p>気温: {t}</p>
        </div>
      </div>
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

