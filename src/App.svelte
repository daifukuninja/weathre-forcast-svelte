<script lang="ts">
  import ForcastCard from "./lib/ForcastCard.svelte";
  import WeatherCard from "./lib/WeatherCard.svelte";
  import Dropdown from "./lib/Dropdown.svelte";

  let place: string = "hirakue";

</script>

<div class="px-0">
  <header class="sticky top-0 navbar bg-secondary shadow p-4 z-50 md:flex md:items-center md:justify-between md:p-6 ">
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
  <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/"
        class="hover:underline">Contribe Co.,Ltd</a> All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
      <li>
        <a href="{null}" class="mr-4 hover:underline md:mr-6 ">About</a>
      </li>
      <li>
        <a href="{null}" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
      </li>
      <li>
        <a href="{null}" class="mr-4 hover:underline md:mr-6">Licensing</a>
      </li>
      <li>
        <a href="{null}" class="hover:underline">Contact</a>
      </li>
    </ul>
  </footer>  
</div>
