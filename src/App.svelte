<script lang="ts">
  import WeatherCard from "./lib/WeatherCard.svelte";

  let place: string = "hirakue";

  const handleClick = () => {
    const elem = (document.activeElement as HTMLElement);
    if(elem){
      elem?.blur();
    }
  }
</script>

<div class="container px-0">
  <header class="sticky top-0 navbar bg-secondary shadow p-4 z-50">
    <div class="flex-1">
      <button class="btn btn-ghost normal-case text-xl text-secondary-content"
        >スーパー地元天気予報</button
      >
    </div>
    <div class="flex-none">
      <div class="dropdown dropdown-end px-1 text-secondary-content">
        <button class="m-1 w-20">
          <svg class="fill-current" width="20" height="20" viewBox="0 0 24 24"
            ><path
              d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"
            /></svg
          >
        </button>
        <ul class="dropdown-content menu p-2 bg-base-100 rounded-box w-52">
          <li>
            <button on:click={() => (place = "hirakue")} on:click={handleClick}>茨城県水戸市</button>
          </li>
          <li>
            <button on:click={() => (place = "tanbara")} on:click={handleClick}>群馬県沼田市</button>
          </li>
          <li>
            <button on:click={() => (place = "sapporo")} on:click={handleClick}>北海道札幌市</button>
          </li>
          <li>
            <button on:click={() => (place = "hitachinaka")} on:click={handleClick}
              >茨城県ひたちなか市</button
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
  <main class="p-4">
    {#key place}
      <WeatherCard {place} />
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
