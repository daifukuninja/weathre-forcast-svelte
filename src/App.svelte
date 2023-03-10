<script lang="ts">
  import ForcastCard from "./lib/ForcastCard.svelte";
  import WeatherCard from "./lib/WeatherCard.svelte";
  import Dropdown from "./lib/Dropdown.svelte";

  let place: string = "hirakue";

  const handleClick = () => {
    const elem = document.activeElement as HTMLElement;
    if (elem) {
      elem?.blur();
    }
  };

</script>

<div class="container px-0">
  <header class="sticky top-0 navbar bg-secondary shadow p-4 z-50">
    <div class="flex-1">
      <button class="btn btn-ghost normal-case text-xl text-secondary-content"
        >スーパー地元天気予報</button
      >
    </div>
    <Dropdown bind:place={place}/>
  </header>
  <main class="p-4">
    {#key place}
      <WeatherCard {place} />
      <ForcastCard {place} />
    {/key}
  </main>
</div>

