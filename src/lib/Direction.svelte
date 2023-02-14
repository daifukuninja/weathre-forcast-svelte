<script lang="ts">
    import { wind_degrees2label } from "../scripts/wind_degrees2label";
    export let deg: number;

    let direction: string = wind_degrees2label(deg);
</script>

<span>{direction}</span>