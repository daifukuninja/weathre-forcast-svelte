<script lang="ts">
    export let icon_id: string;
    let src = `http://openweathermap.org/img/wn/${icon_id}@2x.png`
</script>
<div>
    <img src="{src}" alt="wicon">
</div>
