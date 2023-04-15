<script lang="ts">
    import { onMount } from "svelte";

    export let angle: number = 0;
    export let speed: number = 0;

    let stroke: string = "#FFFFFF";
    switch (true) {
        case (speed < 1.5):
            stroke = "#FFFFFF"  // white
            break;
        case (speed < 3.3):
            stroke = "#5DADE2"  // blue
            break;
        case (speed < 5.4):
            stroke = "#F1C40F"  // yellow
            break;
        case (speed < 7.9):
            stroke = "#EC7063"  // red
            break;
        case (speed < 10.7):
            stroke = "#CB4335"  // vivid red
            break;
        default:
            stroke = "#76448A"  // violet
            break;
    }

</script>

<div class="arrow">
    <svg width="32" height="30">
        <line transform="rotate({angle})" x1="16" y1="5" x2="16" y2="28" stroke="{stroke}" stroke-width="2" stroke-linecap="round" />
        <line transform="rotate({angle})" x1="16" y1="28" x2="12" y2="22" stroke="{stroke}" stroke-width="2" stroke-linecap="round" />
        <line transform="rotate({angle})" x1="16" y1="28" x2="20" y2="22" stroke="{stroke}" stroke-width="2" stroke-linecap="round" />
     </svg>
</div>

<style>
    .arrow {
        height:20px;
    }
    line {
        /* transform: rotate(0deg); */
        transform-origin: 50% 50%;
    }
</style>
