<script lang="ts">
  import ForcastCard from "./lib/ForcastCard.svelte";
  import WeatherCard from "./lib/WeatherCard.svelte";

  let place: string = "hirakue";

  const handleClick = () => {
    const elem = document.activeElement as HTMLElement;
    if (elem) {
      elem?.blur();
    }
  };

  const showDropdownOptions = () => {
        document.getElementById("options").classList.toggle("hidden");
        document.getElementById("arrow-up").classList.toggle("hidden");
        document.getElementById("arrow-down").classList.toggle("hidden");
    }
</script>

<div class="container px-0">
  <header class="sticky top-0 navbar bg-secondary shadow p-4 z-50">
    <div class="flex-1">
      <button class="btn btn-ghost normal-case text-xl text-secondary-content"
        >スーパー地元天気予報</button
      >
    </div>

    <div class="flex flex-row justify-center bg-gray-100">
      <div class="flex-none p-2">
          <button on:click={showDropdownOptions} class="flex flex-row justify-between w-48 px-2 py-2 text-gray-700 bg-white border-2 border-white rounded-md shadow focus:outline-none focus:border-blue-600">
              <span class="select-none">Select an item</span>
  
              <svg id="arrow-down" class="hidden w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
              <svg id="arrow-up" class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" /></svg>
          </button>
          <div id="options" class="hidden w-48 py-2 mt-2 bg-white rounded-lg shadow-xl">
              <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Item 1</a>
              <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Item 2</a>
              <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Item 3</a>
          </div>
      </div>
  </div>

        <!-- <div class="flex-none">
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
            <button on:click={() => (place = "hirakue")} on:click={handleClick}
              >茨城県水戸市</button
            >
          </li>
          <li>
            <button on:click={() => (place = "tanbara")} on:click={handleClick}
              >群馬県沼田市</button
            >
          </li>
          <li>
            <button on:click={() => (place = "sapporo")} on:click={handleClick}
              >北海道札幌市</button
            >
          </li>
          <li>
            <button
              on:click={() => (place = "hitachinaka")}
              on:click={handleClick}>茨城県ひたちなか市</button
            >
          </li>
        </ul>
      </div>
    </div> -->
  </header>
  <main class="p-4">
    {#key place}
      <WeatherCard {place} />
      <ForcastCard {place} />
    {/key}
  </main>
</div>

<style>
  .dropdown:focus-within .dropdown-menu {
    opacity:1;
    transform: translate(0) scale(1);
    visibility: visible;
  }
      </style>