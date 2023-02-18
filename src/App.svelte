<script lang="ts">
  import WeathreCard from "./lib/WeathreCard.svelte";

  let place: string = "hirakue";
  // TODO: OpenWeatherを使うように戻す
  // TODO: 残りの地点も呼び出せるようにする
  // TODO: 天気予報カードを追加する
</script>

<div class="container px-0">
  <header class="sticky top-0 navbar bg-accent shadow p-4 z-50">
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
              <button on:click={() => (place = "hirakue")}>茨城県水戸市</button>
            </li>
            <li>
              <button on:click={() => (place = "numata")}>群馬県沼田市</button>
            </li>
            <li><button>北海道札幌市</button></li>
            <li><button>茨城県ひたちなか市</button></li>
          </ul>
        </li>
      </ul>
    </div>
  </header>
  <main class="p-4">
    {#key place}
      <WeathreCard {place} />
    {/key}

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
