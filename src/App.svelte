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
</script>

<div class="container px-0">
  <header class="sticky top-0 navbar bg-secondary shadow p-4 z-50">
    <div class="flex-1">
      <button class="btn btn-ghost normal-case text-xl text-secondary-content"
        >スーパー地元天気予報</button
      >
    </div>

    <div class=" relative inline-block text-left dropdown">
      <span class="rounded-md shadow-sm"
        ><button class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" 
         type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
          <span>Options</span>
          <svg class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button
      ></span>
      <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
        <div class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
          <div class="px-4 py-3">         
            <p class="text-sm leading-5">Signed in as</p>
            <p class="text-sm font-medium leading-5 text-gray-900 truncate">tom@example.com</p>
          </div>
          <div class="py-1">
            <a href="javascript:void(0)" tabindex="0" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" >Account settings</a>
            <a href="javascript:void(0)" tabindex="1" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" >Support</a>
            <span role="menuitem" tabindex="-1" class="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50" aria-disabled="true">New feature (soon)</span>
            <a href="javascript:void(0)" tabindex="2" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >License</a></div>
          <div class="py-1">
            <a href="javascript:void(0)" tabindex="3" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" >Sign out</a></div>
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