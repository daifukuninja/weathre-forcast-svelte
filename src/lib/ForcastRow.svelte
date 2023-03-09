<script lang="ts">
    import type { ForcastRow } from "../scripts/interface_forcast";
    export let row: ForcastRow;
</script>

<div>
    <div>{row.main.temp}</div>
    <div>{row.weather[0].description}</div>
</div>