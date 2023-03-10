<script>
    import { onMount } from "svelte";
    import { scale } from "svelte/transition";

    export let place;

    let show = false; // menu state
    let menu = null; // menu wrapper DOM reference

    onMount(() => {
        const handleOutsideClick = (event) => {
            if (show && !menu.contains(event.target)) {
                show = false;
            }
        };

        const handleEscape = (event) => {
            if (show && event.key === "Escape") {
                show = false;
            }
        };

        // add events when element is added to the DOM
        document.addEventListener("click", handleOutsideClick, false);
        document.addEventListener("keyup", handleEscape, false);

        // remove events when element is removed from the DOM
        return () => {
            document.removeEventListener("click", handleOutsideClick, false);
            document.removeEventListener("keyup", handleEscape, false);
        };
    });
</script>

<div class="relative" bind:this={menu}>
    <div>
        <button
            on:click={() => (show = !show)}
            class="menu focus:outline-none focus:shadow-solid"
            >Select
        </button>

        {#if show}
            <div
                in:scale={{ duration: 100, start: 0.95 }}
                out:scale={{ duration: 75, start: 0.95 }}
                class="origin-top-right absolute right-0 w-48 py-2 mt-1 bg-gray-800
            rounded shadow-md"
            >
                <button
                    class="px-4 py-2 hover:bg-green-500 hover:text-green-100"
                    on:click={() => (place = "hirakue")} on:click={() => (show = false)}>茨城県水戸市</button
                >
                <button
                    class="px-4 py-2 hover:bg-green-500 hover:text-green-100"
                    on:click={() => (place = "tanbara")} on:click={() => (show = false)}>群馬県沼田市</button
                >
                <button
                    class="px-4 py-2 hover:bg-green-500 hover:text-green-100"
                    on:click={() => (place = "sapporo")} on:click={() => (show = false)}>北海道札幌市</button
                >
                <button
                    class="block px-4 py-2 hover:bg-green-500 hover:text-green-100"
                    on:click={() => (place = "hitachinaka")} on:click={() => (show = false)}>茨城県ひたちなか市</button
                >
            </div>
        {/if}
    </div>
</div>
